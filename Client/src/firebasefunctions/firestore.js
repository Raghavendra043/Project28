import { db } from "../firebase";
import {arrayUnion, getDoc} from 'firebase/firestore'
import axios from "axios";
import { toast } from "react-toastify";
export const addData = async (collection, doc, Data) => {
  try {
    if (Data && collection) {
      if (doc && doc.length > 0) {
        if(! ("created" in Data)){
          Data["created"] = new Date().toString();
        }
        await db.collection(collection).doc(doc).set(Data);
      } else {
        await db.collection(collection).doc(doc).add(Data);
      }
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const getDocData = async (Collection, Doc) => {
  try {
    var data = await db.collection(Collection).doc(Doc).get();
    return data.data();
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (Collection) => {
  try {
    var data = await db.collection(Collection).get();
    var Data = [];
    data.forEach((element) => {
      Data.push(element.data());
    });
    return Data;
  } catch (error) {
    console.log(error);
  }
};

export const search = async (collection, property, element) => {
  try {
    let projectDetails;
    const Data = await getData(collection);
    for (const project of Data) {
      if (project[property] == element) {
        projectDetails = project;
        break;
      }
    }
    if (!projectDetails) {
      projectDetails = "f";
    }
    //console.log("from search : ", projectDetails);
    return projectDetails;
  } catch (err) {
    console.log(err);
  }
};

export const Update = async (collection, doc, data=false) => {
  try {
    let finalData=data;
    if(data){
    const Data = await getDocData(collection, doc);
    
    if (Data) {
      finalData = {
        ...Data,
        ...data,
      };
    }
  }
    db.collection(collection)
      .doc(doc)
      .update(finalData)
      .then(function () {});
  
  } catch (err) {
    console.log(err);
  }
};

export const update= async(collection, doc, name, url, current)=>{
  try {
    let project = await getDocData(collection, doc);
    console.log('Project det:', project);
    
    //project['files'][current]['files'].push({name, url});
    project['files'][current]['adminFiles'].push({name, url, client:[] ,admin:[], adminApp:2,clientApp:2 });
    project['files'][current]['currentState'] = "Waiting for Admins approval";
    if(project['files'][current]['designerFiles'].length >0){
      project['files'][current]['designerFiles'] = []
      project['files'][current]['adminApproval'] = false;
    }
    //sendNotification().then(()=>{})
    
    await db.collection(collection)
      .doc(doc)
      .update(project)
      
    return 1;
  } catch (err) {
    return 5;
    console.log(err);
  }
}

export const clientUpload = async (collection, doc, data1, data2 )=>{
  try {

    var project = await getDocData(collection, doc);
    console.log(project, collection, doc);

    const created1 = new Date().toString()
    project['files']['0']['files'].push({name:data1, url:data2, created:created1})
    project["currentStage"]+=1
    sendNotification(2, doc).then(()=>{})
    await db.collection(collection).doc(doc).update(project)
    return 1;
  }catch(err){
    console.log(err);
    return 5;
  }
}

export const fileDetails = async(title)=>{
    try{
      const Files = await getDocData('Projects', title);
      let files = [];
      const current = Files.currentStage;
      for(var i=1;i<=current;i++){
        for(const j of Files.files[`${i}`].files){
          files.push(j);}
      }
      return files;
    } catch(err) {
      console.log(err);
    }
}

export const sendNotification= async (context, project, stage=false, name=false)=>{
  try {
    let n;
    if(context === 1 ){
      n = `${name} file Submitted by designer for the Project ${project} for the stage ${stage} `
      db.collection('Projects')
      .doc(project)
      .update({
        clientNotification:arrayUnion({data:"File uploaded by designer",sub:n,created:new Date().toString(), user:"client" })
      }).then(()=>{})
    } else if(context === 2){
      n = "client has uploaded project files"
      db.collection('Projects')
      .doc(project)
      .update({
        designerNotification:arrayUnion({data:"Client has uploaded Project Files",sub:n,created:new Date().toString(), user:"designer" })
      }).then(()=>{})
    } else if(context === 3){
      n = `Client has rejected your files for your files in stage : ${stage}`
      db.collection('Projects')
      .doc(project)
      .update({
        designerNotification:arrayUnion({data:"Files Rejected",sub:n,created:new Date().toString(), user:"designer" })
      }).then(()=>{})
    } else if(context === 4){
      n = `Hyrray !! You are done with the Project`
      db.collection('Projects')
      .doc(project)
      .update({
        designerNotification:arrayUnion({data:"Project Completed",sub:n,created:new Date().toString(), user:"designer" })
      }).then(()=>{})
    } else if(context === 5){
      n = `Admin has rejected your project for stage ${stage}`
      db.collection('Projects')
      .doc(project)
      .update({
        designerNotification:arrayUnion({data:"File Rejected by Admin",sub:n,created:new Date().toString(), user:"designer" })
      }).then(()=>{})
    } else if(context === 6){
      n = `Admin has Approved your File for stage ${stage}`
      var n1 = `Plese give Feedback for the Stage : ${stage}`
      db.collection('Projects')
      .doc(project)
      .update({
        designerNotification:arrayUnion({data:"File Rejected by Admin",sub:n,created:new Date().toString(), user:"designer" }),
        clientNotification:arrayUnion({data:"File Approved",sub:n1,created:new Date().toString(), user:"client" })
      }).then(()=>{})
    } else if(context === 7){

    }
    
    //axios.post('', {context, project, designerEmail, clientEmail}).then(()=>{})
  } catch(err) {
      toast.error("error occured", {position:"bottom-center"});
      console.log(err);
    }
}

export const adminNotify=async (data)=>{
  try {
    db.collection('Admin')
      .doc('Notifications')
      .update({
        Notification:arrayUnion(data)
      }).then(()=>{})
  }catch(err) {
    console.log(err);
  }
}

export const getNotification= async(project, state)=>{
  try {
    let get;
    let notification=  [];
    if(state %2 === 0){
      const Data = await getDocData('Projects', project);
      console.log("from funck ", Data)
      notification = notification.concat(Data.clientNotification);
    } if(state %3 === 0){
      const Data = await getDocData('Projects', `${project}`);
      console.log("from funck ", Data, project)
      notification = notification.concat(Data.designerNotification);
    }
    return notification;
  } catch(err) {
      console.log(err);
    }
}



export const Approve = async (title, feedback)=>{
  try {
    //const project = await getDocData('Projects', title);
    const project = await search('Projects', 'title', title)
    //const title = project.title;
    const current = project.currentStage;
    console.log("here too");
    //let project = await getDocData('Projects', title);
    const len = project['files'][current]['adminFiles'].length;
    
    project['files'][current]['adminFiles'][len-1]["admin"].push({1:feedback[0],2:feedback[1]});
    project['files'][current]['adminFiles'][len-1]['adminApp'] = 1;
    project['files'][current]['adminFiles'][len-1]['clientApp'] = 2;
    const file = project['files'][current]['adminFiles'][len-1] 
    sendNotification(6, title, current);
    project['files'][current]['clientFiles'].push(file);
    project['files'][current]['currentState'] = "Waiting for Clients Feedback, Admin has Approved";
    project['files'][current]['adminApproval'] = true;
    //await 
    await db.collection('Projects')
      .doc(title)
      .update(project)
    return project;
  } catch(err){
    console.log(err);
  }
}

export const Rejectadmin = async (title, feedback)=>{
  try{
    const project = await search('Projects', 'title', title)
    const current = project.currentStage;
    console.log("admin rejected");
    const len = project['files'][current]['adminFiles'].length;
    
    project['files'][current]['adminFiles'][len-1]['adminApp'] = 3;
    project['files'][current]['adminFiles'][len-1]['admin'].push({1:feedback[0],2:feedback[1]});
    const file = project['files'][current]['adminFiles'][len-1];
    sendNotification(5, title, current);
    project['files'][current]['designerFiles'][0] = file;
    await db.collection('Projects')
      .doc(title)
      .update(project)
  }catch(err){
    console.log(err);
  }

}

export const clientApproval=async (title, feedback)=>{
  try {
    const project = await search('Projects', 'title', title);
    console.log(project);
    const max = project['stageCount']
    const current = project.currentStage;
    project['files'][current]['clientApproval'] = true;
    project.currentStage+=1;
    if(project.currentStage == max){
      sendNotification(4, title).then(()=>{})
      //axios.post(`${process.env.REACT_APP_BACK}/sendMail`, );
    }
    const len = project['files'][current]['adminFiles'].length
    project['files'][current]['adminFiles'][len-1]['client'].push({1:feedback[0],2:feedback[1]})
    
    await db.collection('Projects')
      .doc(title)
      .update(project)
    
    return 1;


  } catch(err){
    console.log(err);
  }
}

export const clientReject= async(title, feedback)=>{
  try {

    const project = await search('Projects', 'title', title)
    const current = project.currentStage;
    console.log("client rejected");
    const len = project['files'][current]['adminFiles'].length;
    project['files'][current]['adminFiles'][len-1]['client'].push({1:feedback[0], 2:feedback[1]});
    project['files'][current]['adminFiles'][len-1]['clientApp'] = 3;
    const file = project['files'][current]['adminFiles'][len-1];

    project['files'][current]['designerFiles'][0] = file;
    sendNotification(3, project.title, current).then(()=>{})
    await db.collection('Projects')
      .doc(title)
      .update(project)


  } catch(err){
    console.log(err);
  }
}

export const clientNames = async()=>{
  try {
    const data = await getData('Client');
    return data;
  } catch(err){
    console.log(err);
  }
}
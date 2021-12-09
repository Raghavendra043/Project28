import { db } from "../firebase";
import {arrayUnion} from 'firebase/firestore'
import axios from "axios";
export const addData = async (collection, doc, Data) => {
  try {
    if (Data && collection) {
      if (doc && doc.length > 0) {
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
    project['files'][current]['adminFiles'].push({name, url, stage:current});
    project['files'][current]['currentState'] = "Waiting for Admins approval";
    
    await db.collection(collection)
      .doc(doc)
      .update(project)

    
      
    return 1;
  } catch (err) {
    console.log(err);
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

export const sendNotification= (context, project, stage, name, designerEmail,clientEmail)=>{
  try {
    let n;
    if(context === 1 ){
      n = `${name} file Submitted by designer for the Project ${project} for the stage ${stage} `
    }
    db.collection('Projects')
      .doc(project)
      .update({
        clientNotification:arrayUnion(n)
      }).then(()=>{})
    //axios.post('', {context, project, designerEmail, clientEmail}).then(()=>{})
  } catch(err) {
      console.log(err);
    }
}

export const getNotification= async(project, state)=>{
  try {
    let get;
    let notification=  [];
    if(state %2 === 0){
      const Data = await getDocData('Projects', project);
      notification = notification.concat(Data.clientNotification);
    } if(state %3 === 0){
      const Data = await getDocData('Projects', project);
      notification = notification.concat(Data.designerNotification);
    }
    return notification;
  } catch(err) {
      console.log(err);
    }
}


export const Reject = async()=>{
  try {

  } catch(err){
    console.log(err);
  }
}

export const Approve = async (project)=>{
  try {
    const title = project.title;
    const current = project.currentStage;
    console.log("here too");
    //let project = await getDocData('Projects', title);
    const len = project['files'][current]['adminFiles'].length;
    const file = project['files'][current]['adminFiles'][len-1];
    project['files'][current]['clientFiles'].push(file);
    project['files'][current]['currentState'] = "Waiting for Clients Feedback, Admin has Approved";
    
    //await 
    await db.collection('Projects')
      .doc(title)
      .update(project)

  } catch(err){
    console.log(err);
  }
}

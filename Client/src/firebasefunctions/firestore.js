import { db } from "../firebase";

export const addData = async (collection, doc,Data) =>{
    try {
        if(Data && collection){
            if(doc && doc.length>0){
                await db.collection(collection).doc(doc).set(
                    Data
                );    
            } else {
                await db.collection(collection).doc(doc).add(
                    Data
                    );
            }
            
        }
        return true;
    } catch (error) {
        console.log(error);
    }
}

export const getDocData = async(Collection, Doc)=>{
    try {
        var data = await db.collection(Collection).doc(Doc).get();
        return data.data();
    } catch (error) {
        console.log(error);
    }
}

const getData = async(Collection)=>{
    try {
        var data = await db.collection(Collection).get();
        var Data = [];
        data.forEach(element => {
            Data.push(element.data());
        });
        return Data 
    } catch (error) {
        console.log(error);
    }
}

export const search =  async (collection , property, element )=>{
    try {
        let projectDetails;
        const Data = await getData(collection);
        for(const project of Data){
            if(project[property] ==  element){
                projectDetails = project;
                break;
            }
        }
        if(!projectDetails){
            projectDetails = false;
        }
        return projectDetails;
    } catch(err){
        console.log(err);
    }
}
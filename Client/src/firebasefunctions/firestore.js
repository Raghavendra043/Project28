import { db } from "../firebase";

export const addData = async (collection, doc,Data) =>{
    try {
        if(Data && collection){
            if(doc && doc.length>0){
                await db.collection(collection).doc(doc).set({
                    Data
                });    
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
import { auth, persistence } from "../firebase"
import firebase from '../firebase'
import {setPersistence, browserLocalPersistence } from 'firebase/auth';

export const Login = async (email, password, client =false) =>{

    try {
        console.log("Enteged login", email, password);
        await setPersistence(auth, browserLocalPersistence);
        const final = await auth.signInWithEmailAndPassword(email, password);
        const user = auth.currentUser;
        console.log('user', user);
        window.sessionStorage.setItem("key", btoa(email));
        if(final && client){
            return true;
        }
        return user.emailVerified;
    } catch(Error){
        console.log(Error.statusCode);
        return "this"+Error;
    }
};

export const signup = async (email, password) =>{
    try {
        console.log("Enteged signup", email, password);
        await auth.createUserWithEmailAndPassword(email, password);
        sendVerification();
        return "0";
    }
    catch(err){
        console.log(err);
        return err.message;
    }
};

const sendVerification = () =>{
    try {
        auth.currentUser.sendEmailVerification();
    } catch(err){
        console.log(err)
    }
};
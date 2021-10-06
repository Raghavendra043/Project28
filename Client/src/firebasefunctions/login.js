import { auth } from "../firebase"

export const Login = async (email, password) =>{

    try {
        console.log("Enteged login", email, password);
        await auth.signInWithEmailAndPassword(email, password);
        const user = auth.currentUser;
        return user.emailVerified;
    } catch(Error){
        console.log(Error.statusCode);
        return "this"+Error;
    }
};

export const signup = async (email, password) =>{
    
    console.log("Enteged signup", email, password);
    await auth.createUserWithEmailAndPassword(email, password);
            
    sendVerification();

};

const sendVerification = () =>{
    try {
    auth.currentUser.sendEmailVerification();

    } catch(err){
        console.log(err)
    }
};
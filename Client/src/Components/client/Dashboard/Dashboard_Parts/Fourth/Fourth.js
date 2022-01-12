import React,{useState} from 'react'
import styles from './Fourth.module.css';
import Chat from '../../../../../trail/chat';

function Fourth({ formData, setForm ,user}) {
    const x = formData['chatData']['admin']['chatID'];
    const x1 = formData['chatData']['admin']['accessKey']

    const y = formData['chatData'][user]['chatID'];
    const y1 = formData['chatData'][user]['accessKey']
    var To;
    const reverse = (a)=>{            
            setZ(a);
            setS(!a);
    }
    if(user === "designer"){
        To = "client";
    } else {To = "designer"}
    const props = { data:[x, x1], username:formData[`${user}Email`], user:To,from:To, reverse }
    const props1 = { data:[y, y1], username:formData[`${user}Email`], user:"Admin" ,from:To,reverse}

    
    const [Z, setZ] = useState(true);
    const [S,setS] = useState(false);
    return (
        <div className={styles.container}>
            
            {!Z && S ? (<div className={styles.box}>
                <Chat {...props1}/>     
            </div>) :
            (<></>) }
            {Z && !S ? (<div className={styles.box}>
                <Chat {...props}/>    
            </div>) :
            (<></>) }
        </div>

    )
}

export default Fourth

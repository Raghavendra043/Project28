import React,{useState} from 'react'
import styles from './Fourth.module.css';
import Chat from '../../../../../trail/chat';
import Chat1 from '../../../../../trail/chat1';

function Fourth({ formData}) {
    const x = formData['chatData']['admin']['chatID'];
    const x1 = formData['chatData']['admin']['accessKey']

    const y = formData['chatData']['designer']['chatID'];
    const y1 = formData['chatData']['designer']['accessKey']

    const r = formData['chatData']['client']['chatID'];
    const r1 = formData['chatData']['client']['accessKey']

    
    const reverse = (a, b)=>{            
            setZ(a);
            setS(b);
    }
    
    const props = { data:[x, x1],user:"Common",title:formData.title,reverse }
    const props1 = { data:[y, y1],user:"Designer",title:formData.title, reverse}
    const props2 = { data:[r, r1],user:"Client",title:formData.title, reverse}

    
    const [Z, setZ] = useState(true);
    const [S,setS] = useState(false);
    return (
        <div className={styles.container}>
            
            {!Z && S ? (<div className={styles.box}>
                <Chat1 {...props1}/>     
            </div>) :
            (<></>) }
            {Z && !S ? (<div className={styles.box}>
                <Chat1 {...props}/>    
            </div>) :
            (<></>) }
            {Z && S ? (<div className={styles.box}>
                <Chat1 {...props2}/>    
            </div>) :
            (<></>) }
        </div>

    )
}

export default Fourth

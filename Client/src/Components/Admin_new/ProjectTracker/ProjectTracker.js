import React from 'react'
import styles from './ProjectTracker.module.css';
import About from './TrackerParts/About';
import { useForm } from "react-hooks-helper";
import Utilites from './TrackerParts/Utilites';
import { ChatEngine } from 'react-chat-engine';
import { ChatEngineWrapper, ChatSocket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'
import { Col } from 'react-grid-system'
import axios from 'axios';

var PROJECT_ID = '68a08b56-b99d-4754-85e8-375c862bef48'
var USER_NAME = 'Ragh'

function ProjectTracker() {
    const dummy = {"endDate":"12-12-12","projectType":"Design","designermail":"Designer@gmail.com","id":1,"projectSummary":"Sample Project","files":{"0":{"files":[]},"1":{"files":[],"feedback":[],"adminFirstApproval":false,"clientFeedback":[],"approved":false,"adminSecondApproval":false,"currentState":"Waiting for Files from Designers"},"2":{"clientFeedback":[],"adminSecondApproval":false,"adminFirstApproval":false,"files":[],"approved":false,"feedback":[]}},"startDate":"12-12-12","notifications":[],"title":"Sample","currentStage":1,"clientEmail":"sample@gmail.com"}

    //const [formData1, setForm] = useForm(dummy);
    const [ formData, setForm] = useForm(dummy);
    axios.get(`http://localhost:9000/projectracker`).then(res =>{
        console.log(res.data);    
    setForm(res.data);
        
    }).catch((err)=>{
        console.log(err);
    })
    const props = { formData, setForm}
    //const props1 = {dummy, setdummy}
    
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.about}>
                    {formData  ?(
                        <About {...props}/>
                    ) : null}
                    
                </div>
                <div className={styles.details}>
                    <Utilites />
                </div>  
                <div >
                <Col  style={{height:"90vh", width:"27vw"}} >
                    <ChatEngineWrapper>
                        <ChatSocket 
                            projectID={PROJECT_ID}
                            chatID = '59600'
                            chatAccessKey = 'ca-e9987fb7-0adb-4df6-8f7f-75b06cdc59c9'
                            senderUsername = {USER_NAME}
                        />
                         <ChatFeed />  
                    </ChatEngineWrapper>
                </Col>
                </div>
            </div>
        </div>
    )
}

export default ProjectTracker

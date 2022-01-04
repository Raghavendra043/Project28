import React, { useRef } from 'react'
import Fourth from '../Dashboard new/Dashboard_Parts/Fourth/Fourth'
import Navbar from '../Dashboard new/Dashboard_Parts/Navbar/Navbar'
import Third from '../Dashboard new/Dashboard_Parts/Third/Third'
import styles from './feedback.module.css'
import {ReactComponent as Back} from './back.svg'
import {ReactComponent as Download} from './download.svg'
import {ReactComponent as Like} from './thumbsUp.svg'
import {ReactComponent as NeedChanges} from './needChanges.svg'
import {ReactComponent as Sad} from './sad.svg'
import { useHistory, useLocation } from 'react-router-dom'
import { clientApproval, Approve , Rejectadmin} from '../../../firebasefunctions/firestore'

function Feedback() {
    const location = useLocation();
    const history = useHistory();
    const ID = location.state.id;
    const title = location.state.title;
    const request = location.state.request;
    const from = location.state.from;
    console.log(request);
    
    const feedback1 = useRef();
    const feedback2 = useRef();

    const ApproveClient=async()=>{
        console.log('client');
        await clientApproval(title, [feedback1.current.value, feedback2.current.value]);
        history.push('/chome');
    }

    const ApproveAdmin=async()=>{
        console.log('admin');
        await Approve(title, [feedback1.current.value, feedback2.current.value]);
        history.push('/admin/project');
    }

    const rejectClient=async()=>{
        console.log('reject client');
        //await clientApproval(title, [feedback1.current.value, feedback2.current.value]);
        //history.push('/chome');
    }

    const rejectAdmin=async()=>{
        console.log('reject admin');
        await Rejectadmin(title,[feedback1.current.value, feedback2.current.value] );
        history.push('/admin/project');
    }
    return (
        <>
            <div className={styles.screen}>
            <div className={styles.sidebar}>
                <Navbar/>
            </div>
            <div className={styles.maincontainer}>
                <div className={styles.col1}>
                    <div className={styles.box}>
                        <div className={styles.header}>
                            <div className={styles.left}>
                                <div className={styles.back}>
                                    <Back/>
                                </div>
                                <div className={styles.title}>
                                    Deliverables {title}
                                </div>
                                <div className={styles.subtitle}>
                                    First Draft
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.Download}>
                                    <Download/>
                               </div>
                            </div>
                            </div>
                            <div className={styles.cards}>
                                <div className={styles.buttons}>
                                    <div className={styles.svg}><Like/></div>
                                    <div className={styles.comment}>Good to Go</div>
                                </div>
                                <div className={styles.buttons}>
                                    <div className={styles.svg}><NeedChanges/></div>
                                    <div className={styles.comment}>Needs Changes</div>
                                </div>
                                <div className={styles.buttons}>
                                    <div className={styles.svg}><Sad/></div>
                                    <div className={styles.comment}>Didn't Like Anything</div>
                                </div>
                            </div>
                            <div className={styles.remarks}>
                                <div className={styles.title2}>Remarks</div>
                                <div className={styles.input1}><input placeholder="Enter the deliverable numbers here that require changes" type="text" className={styles.inputOne} ref = {feedback1}/></div>
                                <div className={styles.textarea}><textarea className={styles.TextArea} ref = {feedback2} placeholder="Please describe the issues. Make sure it as detailed and specific as possible." /></div>
                            </div>
                            
                            {from == 'client' ? ( <div>
                            <div onClick={(e)=>{
                                rejectClient()
                            }}
                            
                            className={styles.confirmFeedback}>
                                Suggest for changes
                            </div>
                            <div onClick={(e)=>{
                                ApproveClient()
                            }}
                            
                            className={styles.confirmFeedback}>
                                Approve
                            </div>
                            </div> ) : (
                                <div onClick={(e)=>{
                                    if(request === 1){ApproveAdmin()}else{rejectAdmin()}
                                    
                                }}
                                
                                className={styles.confirmFeedback}>
                                    {request === 0 ? "Suggest for changes1"
                                    : "Approve1"}
                                </div>
                            )}
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.fourth}>
                        <Fourth />
                    </div>
                </div>
                <div className={styles.col3}>
                    <div className={styles.third}>
                        {/* <Third /> */}
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default Feedback

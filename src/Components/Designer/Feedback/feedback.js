import React, { useRef, useState } from 'react'
//import Fourth from '../Dashboard new/Dashboard_Parts/Fourth/Fourth'
import Fourth from '../../client/Dashboard/Dashboard_Parts/Fourth/Fourth'
import Navbar from '../Dashboard new/Dashboard_Parts/Navbar/Navbar'
import Third from '../Dashboard new/Dashboard_Parts/Third/Third'
import styles from './feedback.module.css'
import {ReactComponent as Back} from './back.svg'
import {ReactComponent as Download} from './download.svg'
import {ReactComponent as Like} from './thumbsUp.svg'
import {ReactComponent as NeedChanges} from './needChanges.svg'
import {ReactComponent as Sad} from './sad.svg'
import { useHistory, useLocation } from 'react-router-dom'
import { clientApproval, Approve , Rejectadmin, clientReject} from '../../../firebasefunctions/firestore'
import { toast } from 'react-toastify'

import Fourth1 from '../../Admin_new/Fourth/Fourth'
import { BarWave } from 'react-cssfx-loading/lib'

function Feedback() {
    const location = useLocation();
    const history = useHistory();
    const ID = location.state.id;
    const title = location.state.title;
    const request = location.state.request;
    const from = location.state.from;
    const formData = location.state.formData;
    console.log(request);
    const [da, setForm] = useState();
    
    const startLoading = (x)=>{
        if(x)
        {var element = document.getElementById('loading');
        element.style.display = null;
        var element1 = document.getElementById('screen');
        element1.style.opacity = 0.16;
        } else {
          var element = document.getElementById('loading');
          element.style.display = "none";
          var element1 = document.getElementById('screen');
          element1.style.opacity = 10;
        }
    }

    const feedback1 = useRef();
    const feedback2 = useRef();

    const ApproveClient=async()=>{
        startLoading(true);
        console.log('client');
        await clientApproval(title, [feedback1.current.value, feedback2.current.value]);
        startLoading(false);
        history.push('/chome');
    }

    const ApproveAdmin=async()=>{
        startLoading(true);
        console.log('admin');
        await Approve(title, [feedback1.current.value, feedback2.current.value]);
        startLoading(false);
        history.push('/admin/project', {title:formData.title});
    }

    const rejectClient=async()=>{
        startLoading(true);
        console.log('reject client');
        await clientReject(title, [feedback1.current.value, feedback2.current.value]);
        startLoading(false);
        history.push('/cdash');
    }

    const rejectAdmin=async()=>{
        startLoading(true);
        console.log('reject admin');
        await Rejectadmin(title,[feedback1.current.value, feedback2.current.value] );
        startLoading(false);
        history.push('/admin/project', {title:formData.title});
    }
    return (
        <>
            <div className={styles.screen} id="screen" style={{position:"absolute"}}>
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
                        {from && from =='client'? (<Fourth {...{formData, setForm}}/>):(<></>)}
                    </div>
                </div>
                <div className={styles.col3}>
                    <div className={styles.third}>
                        <Third {...{formData, setForm}}/>
                    </div>
                </div>
                </div>
                </div>

                <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
                    <BarWave width="50px" height="50px" color="#1ABAA9"/>
                    <p style={{marginTop:"5vh", marginLeft:"-3vw"}}></p>
                </div>

        </>
    )
}

export default Feedback

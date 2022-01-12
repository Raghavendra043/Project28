import React from 'react'
import Navbar from '../Dashboard new/Dashboard_Parts/Navbar/Navbar'
import styles from './NoProjects.module.css'
import {ReactComponent as  Man} from './man.svg'
import { useHistory } from 'react-router-dom'

function NoProjects({x, email}) {
    const history = useHistory();
    console.log("x", x);
    const Approve = ()=>{

    }
    const Disapprove=()=>{

    }
    return (
        <div>
            {/* <div className={styles.Sidebar}>
                <Navbar/>
            </div> */}
            <div className={styles.Redirect}>
                <div className={styles.RedirectNested}>
                <div className={styles.header}>You dont have any Projects Yet</div>
                <div className={styles.svg}><Man/></div>
                <div className={styles.subheader}>Project-28</div>
                { x && x!=1 ? (
                    <>Please Complete Your Profile to take up projects<button
                    style={{border:"none", color:"white", background:"#19BBB9", borderRadius:"5px"}}
                    onClick={()=>{
                      history.push("/designer/complete", {email:email});
                    }}
                  >Complete</button></>
                ) : (
                    <></>
                )

                }
                {x==1 ? (<>You have been assigned A project

                <button
                    style={{border:"none", color:"white", background:"#19BBB9", borderRadius:"5px"}}
                    onClick={()=>{
                      
                    }}
                  >Download Project Details</button>
                  <button
                    style={{border:"none", color:"white", background:"#19BBB9", borderRadius:"5px", marginTop:"3vh"}}
                    onClick={Approve}
                  >Approve</button>
                  <button
                    style={{border:"none", color:"white", background:"#19BBB9", borderRadius:"5px", marginTop:"3vh"}}
                    onClick={Disapprove}
                  >DisApprove</button>
                  </>)
                    :(<></>)
                }
                </div>
                </div>
        </div>
    )
}

export default NoProjects

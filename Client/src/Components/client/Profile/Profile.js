import React, { useState } from 'react'
import styles from "./Clientprofile.module.css"
import Navbar from '../Dashboard/Dashboard_Parts/Navbar/Navbar'
import { ReactComponent as ProfilePhoto } from './assets/profile.svg'
import { ReactComponent as Pencil } from './assets/pencil.svg'
import { ReactComponent as Upload } from './assets/upload.svg'
import Navbar2 from '../../Navbar/Navbar2'
import Navbar4 from '../../Navbar/Navbar4'
import { useLocation } from 'react-router-dom'
import { BarWave } from "react-cssfx-loading";
import { search } from '../../../firebasefunctions/firestore'

let data;

function Profile() {
    const location = useLocation()
    const Data1 = location.state;
    const [Data, setData] =useState();

    const email = atob(window.sessionStorage.getItem("key"));
    if(!Data){
        search("Client", "email", email).then((project) => {
          if (project && project !== "f") {
            console.log("designer det : ",project);
            setData(project.profile);        
          } else if (project === "f") {
            console.log("fuck");
            setData("nt");
          }
        });
    
      }
    console.log("profile", Data);
    
    return (
        <>
        <div className={styles.main_container1} id= "screen" style={{position:"absolute"}}>
            <Navbar2/>
            <div className={styles.Sidebar}>
                    <Navbar/>
            </div>
          
            {Data ? (<div className={styles.Profile}>
                <div className={styles.box}>
                    <div className={styles.boxheader}>Personal info</div>
                    <div className={styles.row}>
                         <div className="inpurFile">
                    <input type="file" id="file" className="FileUpload" 
                        onChange={(e)=>{}}
                    />
                    <label for="file">
                                <ProfilePhoto className={styles.photoUpload}/>
                        <div className={styles.filetitle}>Upload all your files here</div>
                    </label>
                    </div>
                        </div>
                    <div className={styles.row}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>UserName <Pencil className={styles.pencilsvg}/></div>
                                <div className={styles.inputbox}>
                                    <input placeholder={Data.fullname} type="text" className={styles.inputboxmain}
                                        onChange={(e)=>{
                                            data.fullname = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Company Name</div>
                                <div className={styles.inputbox}>
                                    <input placeholder={Data.companyName} type="text" className={styles.inputboxmain}
                                        onChange={(e)=>{
                                            data.companyName = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        </div>
                        <div className={styles.row}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Primary Contact No. <Pencil className={styles.pencilsvg} /></div>
                                <div className={styles.inputbox}>
                                    <input placeholder={Data.phoneNumber} type="Number" className={styles.inputboxmain}
                                        onChange={(e)=>{
                                            data.phoneNumber = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Primary Email ID <Pencil className={styles.pencilsvg}/></div>
                                <div className={styles.inputbox}>
                                    <input placeholder={Data.email} type="email" className={styles.inputboxmain}
                                        onChange={(e)=>{
                                            data.email = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        </div>
                        <div className={styles.row}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Company Website <Pencil className={styles.pencilsvg}/></div>
                                <div className={styles.inputbox}>
                                    <input placeholder={Data.companyWebsite} type="text" className={styles.inputboxcompany}
                                        onChange={(e)=>{
                                            data.companyWebsite = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        </div>
                    </div>
                    <div className={styles.box1}>
                    <div className={styles.innerbox}>
                        <div className={styles.boxheader1}>Billing Address
                            <button style={{marginLeft:"10vw",fontSize:"1.4vw", color:"white",border:"none",borderRadius:"0.8vw" ,background:"#19BAA8"}}
                                onClick={()=>{
                                    setData(data) ;
                                }}
                            >Update</button>
                        </div>

                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Address1 </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}
                                        onChange={(e)=>{
                                            data["add1"] = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                   
                     
                            <div className={styles.input2}>
                                <div className={styles.headinput}>Address2 </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}
                                        onChange={(e)=>{
                                            data["add2"] = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Company Name </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}
                                         onChange={(e)=>{
                                            data.companyName = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                   
                     
                            <div className={styles.input2}>
                                <div className={styles.headinput}>GST Number </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}
                                         onChange={(e)=>{
                                            data["gst"] = e.target.value
                                        }}
                                    />
                                </div>
                            </div>
                      </div>
                        
                        </div>
                    <div className={styles.innerbox}>
                        <div className={styles.boxheader3}>Brand Assets</div>
                        <div className={styles.fileupload}><input type="file" id="file" className="FileUpload" />
                            <label for="file">
                                <Upload className={styles.svg}/>
                            </label>
                        </div>
                        <div className={styles.uploadBtn}><input type="file" id="file" className="FileUpload"/><label for="file">Upload</label></div>
                        </div>
                    </div>
                
            </div>) : (<></>)}
        </div>
        <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Getting account Info</p>
            </div>
        </>
    )
}

export default Profile

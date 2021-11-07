import React from 'react'
import styles from "./Clientprofile.module.css"
import Navbar from '../../Designer/Dashboard new/Dashboard_Parts/Navbar/Navbar'
import { ReactComponent as ProfilePhoto } from './assets/profile.svg'
import { ReactComponent as Pencil } from './assets/pencil.svg'
import { ReactComponent as Upload } from './assets/upload.svg'

function Profile() {
    return (
        <div className={styles.main_container1}>
            <div className={styles.Sidebar}>
                    <Navbar/>
            </div>
          
            <div className={styles.Profile}>
                <div className={styles.box}>
                    <div className={styles.boxheader}>Personal info</div>
                    <div className={styles.row}>
                         <div className="inpurFile">
                    <input type="file" id="file" className="FileUpload" />
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
                                    <input placeholder="john Doe" type="text" className={styles.inputboxmain}/>
                                </div>
                            </div>
                      </div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Company Name</div>
                                <div className={styles.inputbox}>
                                    <input placeholder="Company" type="text" className={styles.inputboxmain}/>
                                </div>
                            </div>
                      </div>
                        </div>
                        <div className={styles.row}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Primary Contact No. <Pencil className={styles.pencilsvg} /></div>
                                <div className={styles.inputbox}>
                                    <input placeholder="9876543211" type="Number" className={styles.inputboxmain}/>
                                </div>
                            </div>
                      </div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Primary Email ID <Pencil className={styles.pencilsvg}/></div>
                                <div className={styles.inputbox}>
                                    <input placeholder="Johndoe@gamil.com" type="email" className={styles.inputboxmain}/>
                                </div>
                            </div>
                      </div>
                        </div>
                        <div className={styles.row}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Company Website <Pencil className={styles.pencilsvg}/></div>
                                <div className={styles.inputbox}>
                                    <input placeholder="john Doe" type="text" className={styles.inputboxcompany}/>
                                </div>
                            </div>
                      </div>
                        </div>
                    </div>
                    <div className={styles.box1}>
                    <div className={styles.innerbox}>
                        <div className={styles.boxheader1}>Billing Address</div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Address1 </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}/>
                                </div>
                            </div>
                   
                     
                            <div className={styles.input2}>
                                <div className={styles.headinput}>Address2 </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}/>
                                </div>
                            </div>
                      </div>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <div className={styles.headinput}>Company Name </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}/>
                                </div>
                            </div>
                   
                     
                            <div className={styles.input2}>
                                <div className={styles.headinput}>GST Number </div>
                                <div className={styles.inputbox}>
                                    <input placeholder="" type="text" className={styles.inputboxmain}/>
                                </div>
                            </div>
                      </div>
                        
                        </div>
                    <div className={styles.innerbox}>
                        <div className={styles.boxheader3}>Brand Assets</div>
                        <div className={styles.fileupload}><input type="file" id="file" className="FileUpload" />
                    <label for="file">
                                <Upload className={styles.svg}/>
                    </label></div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Profile

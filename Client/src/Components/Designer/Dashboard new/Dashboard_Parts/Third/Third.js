import React from 'react';
import "./Third.css";
import  EditCheckbox from './check.png'
import Extra from "./Extra.png";    
import Tick from "./Tick.png";    
import data from "./drafts.json"

// status:
// 0:completed
// 1:ongoing
// 2:upcoming

function Third() {
    return (
            <div style={{overflow:"hidden",height:"100vh"}}>

                <div className="des-d-t-box-container">
                    {data.map((data,key) =>{
                        return (
                            <div className={(data.status===0?"des-d-t-comp":data.status===1?"des-d-t-on":"des-d-t-up") +" des-d-t-box"}>
                            <div className="des-d-t-number">{data.id}</div>
                            <div className="des-d-t-des">{data.Desc}</div>
                            <hr style={{width:"25%",height:"2px",borderTop: "2.5px solid var(--des-text-col)"}}></hr>
                            <div className="d-flex justify-content-end">
                                <div style={{fontSize:"0.8em",fontWeight:"normal"}}>
                                    {
                                        data.status===0?"TaskCompleted":data.status===1?"View":""
                                    }
                                </div>
                                <img className="des-d-t-check"
                                 src={data.status===0?Tick:data.status===1?EditCheckbox:Extra} 
                                 />
                            </div>
                        </div>
                        );
                    })}

                </div>
            </div>    
    )
}

export default Third;

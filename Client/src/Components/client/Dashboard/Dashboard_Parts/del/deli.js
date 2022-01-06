/* eslint-disable  */
import { useState } from "react"
import { search } from "../../../../../firebasefunctions/firestore";

export default  function Deli (){

    const [Data, SetData] = useState(null);
    const [details, setDetails] = useState();
    //let email  = 'f20190120@hyderabad.bits-pilani.ac.in'
    const email = atob(window.sessionStorage.getItem("key"));
    let c;
    const [stages, setStage] = useState(null);
    if(!Data){

            search("Projects", "clientEmail", email).then((project) => {
              if (project && project !== "f") {
                console.log("from inside:", project);
                setDetails(project);
                c = { onCurrent: project.currentStage };
                SetData({ ...project, ...c });
                let x= [...Array(project.currentStage).keys()];
                setStage(x);
                
                console.log([...Array(project.currentStage).keys()])
              } else if (project === "f") {
                setDetails("f");
                SetData("f");
              }
            });
          

    }
    return(
        <div>
            {Data ? (
            
            <div>
            Project Deliveribles
            {stages && stages.map((data, key)=>{
                return <div style={{marginBottom:"15px"}}>
                    
                <div >{data+1}</div>
                {Data['files'][`${data+1}`]['clientFiles'].map((element, id)=>{
                     return <div style={{marginBottom:"15px"}}>
                         <a href={element.url}><div style={{height:"30px", width:"30px", background:"black"}}
                            
                         ></div></a>{element.name}
                    </div>
                })

                }
                
                </div>
            })

            }
            
            </div>) 

            
            
            : (<>this</>)}
        </div>
    )
}
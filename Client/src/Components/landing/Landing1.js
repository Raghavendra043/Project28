import { useHistory } from "react-router-dom"
import Navbar1 from "../Navbar/Navbar1";
export default function Landing1 (){
    const history = useHistory();

    const route = (id)=>{
        
        if(id===1){
        history.push("/designer/login");}
        else if(id ===2){
            history.push("/clientlogin");}
        else {
                history.push("/adminLog");
            }
    }

    return(
        <>
        <Navbar1/>
        <div style={{marginTop:"30vh", marginLeft:"43vw"}}>
        <button
            onClick={()=>{
                route(1);
            }}
        > Designer </button>

        <button
            onClick={()=>{
                route(2);
            }}
        > client </button>

        <button
            onClick={()=>{
                route(3);
            }}
        > Admin </button>
        </div>

        </>
    )
}
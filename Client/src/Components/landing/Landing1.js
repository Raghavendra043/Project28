import { useHistory } from "react-router-dom"

export default function Landing1 (){
    const history = useHistory();

    const route = (id)=>{
        
        if(id===1){
        history.push("/designer/login");}
        else if(id ===2){
            history.push("/clientlogin");}
        else {
                history.push("/admin/dash");
            }
    }

    return(
        <>
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
        </>
    )
}
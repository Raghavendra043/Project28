import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(){
    const history = useHistory();
    return(
    <>
        Home
        <button
            onClick={()=>{
                history.push("/create");
            }}
        >Create a Project</button>
    </>
    );
}
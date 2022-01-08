import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Dashboard_Parts/Navbar/Navbar";
import Navbar2 from "../../../Navbar/Navbar2";
export default function Home(){
    const history = useHistory();
    return(
    <>
    <Navbar2/>
    <div className="Sidebar">
          <Navbar  />
        </div>
        Home
        <button style={{marginLeft:"45vw", marginTop:"40vh"}}
            onClick={()=>{
                history.push("/create1");
            }}
        >Create a Project</button>
    </>
    );
}
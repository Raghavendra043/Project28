import React from "react"

import CreateProject from "./Create/CreateProject"
import CreateProjectList from "./Create/CreateProjectList"

function CreateP(){

    const props = {
        clientName:"",
        title:"",
        type:"",
        companyName:"",
        startDate:"",
        endDate:"",
        tagLine:"",
        motto:"",
        companySince:"",
        target:"",
        message:"",
        brandpersona:"",
        competitor:"",
        logo:"",
        style:"",
        look:""
    }
    return(
        <>
            <CreateProject {...props}/>
        </>
    )
}
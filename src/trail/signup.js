import { CreateChat, CreateUser } from "./createchat";
import { ChatEngine } from 'react-chat-engine';
import { ChatEngineWrapper, ChatSocket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'
import { Col } from 'react-grid-system'
import axios from "axios";
//import download from 'download';

import { saveAs } from 'file-saver';



export default function Signup (){
    
  const check = ()=>{
    let opts = {
      url: `http://localhost:9000/create-pdf`,
      method: "POST",
      responseType: 'blob'
  };
    axios(opts).then((res)=>{
      saveAs(res.data, "file.pdf", res.headers['content-type']);

    }).catch((err)=>{console.log(err);})
  }
        return (
              
              
              <div style={{width : "40vw"}}>
                <button
                  onClick={check}
                >

                  click
                </button>
              </div>
        );
}
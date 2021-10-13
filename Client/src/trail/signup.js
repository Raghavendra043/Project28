import { CreateChat, CreateUser } from "./createchat";
import { ChatEngine } from 'react-chat-engine';
import { ChatEngineWrapper, ChatSocket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'
import { Col } from 'react-grid-system'
var PROJECT_ID = '68a08b56-b99d-4754-85e8-375c862bef48'
var USER_NAME = 'Ragh'


export default function Signup (){
    
        return (
              
              
              <div style={{width : "40vw"}}>
                {/* <button onClick = {()=>{CreateUser()}}>click for create user </button>  */}
                    <ChatEngineWrapper
                    height = "50vh">
                        <ChatSocket 
                            projectID={PROJECT_ID}
                            chatID = '59600'
                            chatAccessKey = 'ca-e9987fb7-0adb-4df6-8f7f-75b06cdc59c9'
                            senderUsername = {USER_NAME}
                        />
            
                      <ChatFeed />
                    </ChatEngineWrapper>
              </div>
        );
}
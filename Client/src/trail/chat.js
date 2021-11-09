import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { ChatEngineWrapper, ChatSocket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'

import { Col } from 'react-grid-system'
require('./chattest.css');
var PROJECT_ID = '68a08b56-b99d-4754-85e8-375c862bef48'
var USER_NAME = 'Ragh'

function Chat() {

    function create () {
        //var element = document.getElementsByClassName('ql-container')[0];
        var element = document.getElementsByClassName('quill')[0];
        var tag = document.getElementById("ce-send-message-button");
        // var button = document.createElement('BUTTON');
        // var text = document.createTextNode("Button");
        // button.appendChild(text);
        element.appendChild(tag);
    }
        
        

	return (
        <>
        
        <div style={{width:"30vw", marginTop:"10vh", textAlign:"center"}}>
            <button id = "client"> Client</button>
            <button id = "admin">
                Admin
            </button>
        </div>
        <Col style = {{height:"65vh", width:"30vw", marginTop:"10vh"}}>
            <ChatEngineWrapper>
                <ChatSocket 
                    projectID={PROJECT_ID}
                    chatID = '59600'
                    chatAccessKey = 'ca-e9987fb7-0adb-4df6-8f7f-75b06cdc59c9'
                    senderUsername = {USER_NAME}
                />
                
                    <ChatFeed />
            </ChatEngineWrapper>    
            
            <button onClick={()=>{
                document.getElementById('ce-send-message-button').click();
            }}>Click me</button> 
            
            <button onClick={()=>{
                document.getElementById('upload-document-button').click();
            }}>cteate</button> 
        
        </Col>
        </>
    )
}

export default Chat;
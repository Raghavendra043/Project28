import React from 'react'

import { ChatEngineWrapper, ChatSocket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'

import { Col } from 'react-grid-system'

var PROJECT_ID = '68a08b56-b99d-4754-85e8-375c862bef48'
var USER_NAME = 'Darthvader'

const ChatEngine = () => {
    return (
        <div>
        <Col xs={11} ms={8} md={6} lg ={4} style={{height:"50vh", width:"40vw"}} >
        <ChatEngineWrapper>
            <ChatSocket 
                projectID={PROJECT_ID}
                chatID = '59600'
                chatAccessKey = 'ca-e9987fb7-0adb-4df6-8f7f-75b06cdc59c9'
                senderUsername = {USER_NAME}
            />
            
                <ChatFeed />
                
        </ChatEngineWrapper>
        </Col></div>
    )
}

export default ChatEngine
import React, { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import {
  ChatEngineWrapper,
  ChatSocket,
  ChatList,
  ChatFeed,
  ChatSettings,
} from "react-chat-engine";

import { Col } from "react-grid-system";
require("./chattest.css");
var PROJECT_ID = "68a08b56-b99d-4754-85e8-375c862bef48";
var USER_NAME = "Ragh";

function Chat({ formData, setForm , User, To}) {
  const [user, setUser] = useState("admin");
  const [chatID, setChat] = useState(formData['chatData']['admin']['chatID']);
  const [access, setAccess] = useState(formData['chatData']['admin']['accessKey']);

  function create() {
    //var element = document.getElementsByClassName('ql-container')[0];
    var element = document.getElementsByClassName("quill")[0];
    var tag = document.getElementById("ce-send-message-button");
    // var button = document.createElement('BUTTON');
    // var text = document.createTextNode("Button");
    // button.appendChild(text);
    element.appendChild(tag);
  }

  return (
    <>
      <div className="chat__title">{'1'} - {user}</div>
      <Col style={{ height: "80vh", width: "30vw", marginTop: "3vh" }}>
        <ChatEngineWrapper>
          <ChatSocket
            projectID={PROJECT_ID}
            // chatID="59600"
            chatID = {chatID}
            // chatAccessKey="ca-e9987fb7-0adb-4df6-8f7f-75b06cdc59c9"
            chatAccessKey={access}
            senderUsername={formData[`${User}Email`]}
          />

          <ChatFeed />
        </ChatEngineWrapper>
        <div className="chat__button__cover">
          <button
            className="chat__button"
            onClick={() => {
              document.getElementById("upload-document-button").click();
            }}
          >
            <i class="fas fa-paperclip"></i>
          </button>
          <button
            className="chat__button"
            onClick={() => {
              document.getElementById("ce-send-message-button").click();
            }}
          >
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </Col>
      <div className="chat__switch__cover">
        <button className="chat__switch chat__client"
          onClick={()=>{
            setChat(formData['chatData']['admin']['chatID']);
            setAccess(formData['chatData']['admin']['accessKey'])
            setUser(To);
          }}
        > {To}</button>
        <button className="chat__switch chat__admin"
          onClick={()=>{
            setChat(formData['chatData']['client']['chatID']);
            setAccess(formData['chatData']['client']['accessKey'])
            setUser("Admin");
          }}
        >Admin</button>
      </div>
    </>
  );
}

export default Chat;

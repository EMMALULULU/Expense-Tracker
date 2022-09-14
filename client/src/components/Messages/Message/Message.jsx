import React from 'react';
import './Message.css';
function Message(props) {
  const { message, name } = props;
  const trimmedName = name.trim().toLowerCase();
  let isSentByCurrentUser = message.user === trimmedName ? true : false;
  let content;
  if (isSentByCurrentUser) {
    content = (
      <div className="messageContainer justifyEnd">
        <p className="sentText pr-10">{trimmedName}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{message.text}</p>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{message.text}</p>
        </div>
        <p className="sentText pl-10">{message.user}</p>
      </div>
    );
  }
  return content;
}

export default Message;

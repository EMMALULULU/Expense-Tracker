import React from 'react';

import './Input.css';
function Input(props) {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message....."
        value={props.message}
        onChange={(e) => {
          props.setMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.sendMessage(e);
            props.setMessage('');
          }
        }}
      />
      <button
        className="sendButton"
        onClick={(e) => {
          props.sendMessage(e);
          props.setMessage('');
        }}
      >
        Send
      </button>
    </form>
  );
}

export default Input;

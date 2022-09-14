import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

export default function Join(props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const preventClick = function (e) {
    if (!name || !room) {
      e.preventDefault();
    }
  };
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>

        <Link onClick={preventClick} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">
            Join A Chat room
          </button>
        </Link>
      </div>
    </div>
  );
}

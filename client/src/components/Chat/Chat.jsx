import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { io } from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
import './Chat.css';
let socket;

export default function Chat() {
  let location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localHost:4000';

  useEffect(() => {
    let { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location]);

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('message set message');
      setMessages((prev) => {
        return [...prev, message];
      });
    });
  }, []);
  useEffect(() => {
    socket.on('roomData', ({ room, users }) => {
      setUsers(users);
    });
  }, []);

  //function for sending message
  function sendMessage(e) {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => {});
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

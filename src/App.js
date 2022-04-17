import { Button, Input } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { REQUEST_STATE } from './configs';
import socketIOClient from "socket.io-client";

function App() {
  const [mySocket, setMySocket] = useState(null);
  const [connectStatus, setConnectStatus] = useState(REQUEST_STATE.INITIAL);
  const [endPoint, setEnpoint] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  function handleConnectSocket() {
    setConnectStatus(REQUEST_STATE.REQUEST);
    setMySocket(socketIOClient(endPoint));
  }

  useEffect(() => {
    if (mySocket?.connected) {
      setConnectStatus(REQUEST_STATE.SUCCESS);
    } else {
      setConnectStatus(REQUEST_STATE.ERROR);
    }
  }, [mySocket])

  return (
    <div className="app">
      <div className="container">
        <div className="input__row">
          <div style={{ width: "150px", minWidth: '150px' }}>Enter endpoint: </div>
          <Input placeholder="Enter endpoint" value={endPoint} onChange={(e) => setEnpoint(e.target.value)}></Input>
        </div>

        <div className="json__stringify">
          <div style={{ width: "150px", minWidth: '150px' }}>Json stringify: </div>
          <Input placeholder="Json" ></Input>
          <Button type="primary">Excute</Button>
        </div>

        <div className="input__row">
          <div style={{ width: "150px", minWidth: '150px' }}>Enter topic: </div>
          <Input placeholder="Enter topic" value={topic} onChange={(e) => setTopic(e.target.value)}></Input>
          <Button type="primary" onClick={() => handleConnectSocket()}>Connect</Button>
        </div>

        <div className="input__row">
          <div style={{ width: "150px", minWidth: '150px' }}>Connect status: </div>
          <div>{mySocket == null ? "DISCONNECT" : "CONNECT"}</div>
        </div>

        <div className="input__row">
          <div style={{ width: "150px", minWidth: '150px' }}>Message: </div>
          <Input placeholder="Message" width={200} value={message} onChange={(e) => setMessage(e.target.value)}></Input>
          <Button type="primary">Send</Button>
        </div>

        <div className="message">
          <div style={{ marginBottom: "10px", fontWeight: 'bold' }}>Message: </div>
          <div className="message__box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

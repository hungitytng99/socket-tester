import { Button, Input } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import SockJsClient from "react-stomp";

function App() {
  const [commentSocket, setCommentSocket] = useState(null);


  return (
    <div className="app">
      <div className="container">
        <div className="input__row">
          <div style={{ width: "200px" }}>Enter endpoint: </div>
          <Input placeholder="Enter endpoint"></Input>
        </div>

        <div className="json__stringify">
          <div style={{ width: "200px" }}>Json stringify: </div>
          <Input placeholder="Json"></Input>
          <Button type="primary">Excute</Button>
        </div>

        <div className="input__row">
          <div style={{ width: "200px" }}>Enter topic: </div>
          <Input placeholder="Enter topic"></Input>
          <Button type="primary">Connect</Button>
        </div>

        <div className="input__row">
          <div style={{ width: "200px" }}>Message: </div>
          <Input placeholder="Message" width={200}></Input>
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

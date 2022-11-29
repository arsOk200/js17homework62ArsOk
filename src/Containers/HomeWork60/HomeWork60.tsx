import React from 'react';
import Form from "../../Components/Form-HW60/Form";
import Messages from "../../Components/Messages/Messages";

const HomeWork60 = () => {
  return (
    <div className="App text-center m-auto" style={{width: '890px'}}>
      <Form/>
      <h1>Messages</h1>
      <Messages/>
    </div>
  );
};

export default HomeWork60;
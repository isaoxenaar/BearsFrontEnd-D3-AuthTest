import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
import "../css/home.css";
import Chatroom  from './Chatroom';
import Dataviz  from './Dataviz';

const Home = () => {
    const location = useLocation()
    const user:any = location.state;
    console.log("user in home" + user)
    
    return (
      <section className="Home--main">
        <section className="Home--welcome">here you can see where polarbears have been spotted, register to enter the location where you saw a bear.</section>
        
        <Dataviz/>
        <Chatroom/>
      </section>
    )
}

export default Home;
//chatroom and dataviz. 
//bear image. 
//welcome message. 


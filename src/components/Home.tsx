import React, { Component } from 'react'
import "../css/home.css";
import Chatroom  from './Chatroom';
import Dataviz  from './Dataviz';

const Home = () => {
    return (
      <section className="Home--main">
        <Dataviz/>
        <Chatroom/>
      </section>
    )
}

export default Home;
//chatroom and dataviz. 
//bear image. 
//welcome message. 


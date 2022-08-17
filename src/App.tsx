import React, { useState } from 'react';
import "./css/app.css";
import { Routes, Route, Link } from "react-router-dom";
import Home  from "./components/Home";
import AuthBar from "./components/AuthBar";
import ObserverPage from "./components/ObserverPage"

function App() {



  return (
    <main className="App--main">
    <header className="App--header">
      <nav className="App--nav"> 
        <section className="App--auth">
          <AuthBar />
        </section>
     </nav>
    </header>
    <section className="App--routes">
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/observer" element={<ObserverPage/>}></Route>
      </Routes>
    </section>
     <footer className="App--footer"> 
      this is a sticky footer
     </footer>
    </main>
  );
}

export default App;
//when observer logs in, than the chatroom will be available. 
//header, footer, navbar.

//app -> auth, home(needs logged in user), observer.
import React, { useState, useEffect } from 'react'
import "../css/observer.css";
import  AuthUser  from "../components/AuthUser";
import { useLocation } from 'react-router-dom';
import BearGallery from "./BearGallery";

const ObserverPage = ( ) =>  {
  const location = useLocation();
  const user: any = location.state;
  console.log("user in observer" + user.name)

  {
    return (
      <section className="Observer--main">
        <p>hej user, these are the observations you made.</p>
      <AuthUser/>
        <BearGallery/>
      </section>
    )
  }
}
export default ObserverPage;
// information of observer
// change name, delete user. 
// bear gallery by user.

import React, { useState, useEffect } from 'react'
import "../css/observer.css";
import { useLocation } from 'react-router-dom';
import BearGallery from "./BearGallery";

const ObserverPage = ( ) =>  {
  var location = useLocation();
  console.log(location.state)
  {
    return (
      <section className="Observer--main">
        <BearGallery/>
      </section>
    )
  }
}
export default ObserverPage;
// information of observer
// change name, delete user. 
// bear gallery.

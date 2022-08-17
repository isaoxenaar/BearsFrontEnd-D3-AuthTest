import React, { FC, useState, useEffect, useRef } from 'react'
import * as d3 from "d3";
import { bearType } from "../types/bearTypes";

const Dataviz = () =>  {
 
  const d3Chart = useRef<SVGSVGElement>(null);
  const [ bears, setBears ] = useState<bearType[]>([{id: 0, observerId: 0, longitude: 0, latitude: 0, date: new Date().toISOString()}])

  const getBears = async () => {
    const request = await fetch("https://localhost:7005/api/Bear")
    const response = await request.json();
    console.log(response)
    setBears(response);
  }

    useEffect(() => {
      getBears();

    }, [])

    return (
      <section className="Dataviz--main">Dataviz
      {/* <img width="80%" src="https://image.forskning.no/1463931.jpg?imageId=1463931&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=630"></img> */}
      <section id="Dataviz--viz" >
        <svg ref={d3Chart}></svg>
        <div id="map--id"></div>
      </section>
      </section>
    )
}

export default Dataviz
//shows map with bear dots. 


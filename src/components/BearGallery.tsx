import React, { useState, useEffect, SyntheticEvent } from 'react';
import "../css/gallery.css";
import  { bearType }  from "../types/bearTypes";
import Bear from "./Bear";

const BearGallery = () => {

  const [loading, setLoading ] = useState<boolean>(true);
  const [bear, setBear ] = useState<bearType>({id: 0, observerId: 0, longitude: 0, latitude: 0, date: new Date().toISOString() })
  const [bears, setBears ] = useState<bearType[]>([{id: 0, observerId: 0, longitude: 0, latitude: 0, date: new Date().toISOString()}])

  const getBears = async () => {
    const request = await fetch("https://localhost:7005/api/Bear")
    const response = await request.json();
    console.log(response)
    setBears(response);
  }
  
  const submit = async (e: SyntheticEvent) => {
     e.preventDefault();
    
     const bodyBear = {...bear, observerId:1 }
     console.log(bear, bodyBear)
     const request = await fetch("https://localhost:7005/api/Bear", {
        method: 'POST',
        headers: {'Content-Type': 'application/json', },
        body: JSON.stringify(bodyBear)
     })
     console.log(request.json())
     setLoading(!loading);

  }

  useEffect(() => {
    getBears()
     },[loading])

    return(
      <section className="Gallery--main" >
        <p className="Gallery--p">( latitude, longitude )</p>
        <table className="Gallery--table">
        <tr>
          <th>Degree notation</th>
          <th align="right">Decimal notation</th>
        </tr>
        <tr>
          <td>latitude N°</td>
          <td align="right">latitude</td>
        </tr>
        <tr>
          <td>latitude S°</td>
          <td align="right"> - latitude</td>
        </tr>
        <tr>
          <td>longitude W°</td>
          <td align="right">longitude</td>
        </tr>
        <tr>
          <td>longitude E°</td>
          <td align="right"> - longitude</td>
        </tr>
        </table>
        <p className="Gallery--p">use decimal notation.</p>
      <form className="Gallery--form" onSubmit={submit}>
        <div className="Form--el">
        
          <input type="text" className="Form--input" placeholder="latitude"  onChange={e => setBear(prev => 
            { 
              const nw = prev 
              nw.latitude = parseInt(e.target.value);
              console.log(nw)
              return nw
              
            })} />
        </div>
        <div className="Form--el">
          <input type="text" className="Form--input" placeholder="longitude" onChange={e => setBear(prev => 
            { 
              const nw = prev 
              nw.longitude = parseInt(e.target.value);
              return nw
              
            })}/>
        </div>
        <button className="AuthBar--button" type="submit">add bear</button>
      </form>
      <p className="Gallery--q">where did you spot the bear?</p>
      <section className="Gallery--bears">{bears.map((bear:bearType) => <Bear bear={bear}/>)}</section>
      </section>
    )
}

export default BearGallery;



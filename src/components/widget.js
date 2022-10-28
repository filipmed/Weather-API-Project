/*
import React from 'react'
import axios from 'axios'
import { useState } from "react";
function Widget() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState('')
  const imgurl = `https://openweathermap.org/img/wn/${data.list ? data.list[0].weather[0].icon:null}@2x.png`
  const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1f35643112b0237f679250d783dd2abf&units=imperial`
  
  const forLocation=()=>{
   
    axios.get(urls).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  
}
 
 
 
 
  return (
    <div className="widget">
        <div >
         
      </div>
      <div className="container">
      
      <div className="top">
         <div className="Location">
                {data.city?<p>{data.city.name}</p>:null}          
          </div>
          <div className="temp">
            {data.list?<h1>{data.list[0].main.temp.toFixed()}°F</h1>:null}
          </div>
          <div className="description">
          {data.list ?<p>{data.list[0].weather[0].description}</p>:null}
          </div>
          <div className="Icon">
          {data.list?<img src={imgurl}  width="120" height="100"></img>:null}
          
          </div>
      </div>
       
      {data.city!=undefined&&
       <div className="bottom">
           <div className="feels">
           {data.list  ?<p>{data.list[0].main.feels_like.toFixed()}°F</p>:null}
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.list  ?<p>{data.list[0].main.humidity.toFixed()}%</p>:null}
            <p>humidity</p>
          </div>
          <div className="wind">
          {data.list  ?<p>{data.list[0].wind.speed.toFixed()} MPH</p>:null}
            <p>Wind Speed</p>
          </div>
       </div>
          }
       </div>

    </div>
  )
}

export default Widget

*/
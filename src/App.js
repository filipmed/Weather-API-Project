import axios from "axios";
import { useState } from "react";


function App() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState('')
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f35643112b0237f679250d783dd2abf&units=imperial`
  const searchLocation=(event)=>{
    if(event.key==='Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}
  return (
    <div className="App">

      <div className="search">
      <input
      value={location}
      onChange={event=>setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type='text'     
      />
      </div>
      <div className="container">
      
      <div className="top">
         <div className="Location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main?<h1>{data.main.temp.toFixed()}°F</h1>:null}
          </div>
          <div className="description">
          {data.weather ?<p>{data.weather[0].main}</p>:null}
          </div>
      </div>
       
       {data.name!=undefined&&
       <div className="bottom">
           <div className="feels">
           {data.main ?<p>{data.main.feels_like.toFixed()}°F</p>:null}
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ?<p>{data.main.humidity.toFixed()}%</p>:null}
            <p>humidity</p>
          </div>
          <div className="wind">
          {data.wind ?<p>{data.wind.speed.toFixed()} MPH</p>:null}
            <p>Wind Speed</p>
          </div>
       </div>
       }
       </div>
    </div>
  );
}

export default App;

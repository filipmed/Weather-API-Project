import axios from "axios";
import { useState } from "react";
import Widget from "./components/widget";

function App() {
  const [data,setData]=useState([{}])
  const [location,setLocation]=useState('')
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f35643112b0237f679250d783dd2abf&units=imperial`
  
  const imgurl = `https://openweathermap.org/img/wn/${data[0].weather ? data[0].weather[0].icon:null}@2x.png`
  const imgurl2= `https://openweathermap.org/img/wn/${data[1] ? data[1].list[3].weather[0].icon:null}@2x.png`
  const imgurl3= `https://openweathermap.org/img/wn/${data[1] ? data[1].list[11].weather[0].icon:null}@2x.png`
  const imgurl4= `https://openweathermap.org/img/wn/${data[1] ? data[1].list[19].weather[0].icon:null}@2x.png`

  const urls = [`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f35643112b0237f679250d783dd2abf&units=imperial`, `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1f35643112b0237f679250d783dd2abf&units=imperial`]; // first url is the current weather api and second is forecast api
  const searchLocation=(event)=>{
    if(event.key==='Enter'){

      const promises=urls.map(url=>axios.get(url));
    
    Promise.all(promises)
    .then((response)=>{
      let data = [];
      response.forEach(response => {
        data = data.concat(response.data);
    });

       setData(data);
      
      console.log(data)
    })
    setLocation('')
  }
}
const dt0 = data[0]?data[0].dt:null;
const dt1 = data[1]?data[1].list[3].dt :null;
const dt2 = data[1]?data[1].list[11].dt :null;
const dt3 = data[1]?data[1].list[19].dt :null;
var curntday=(new Date(dt0*1000))
var day1 = (new Date(dt1*1000));
var day2 = (new Date(dt2*1000));
var day3 = (new Date(dt3*1000));
console.log(day1)
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
            
            
            <p>{data[0].name}</p>
          </div>
          <div className="temp">
            {data[0].main?<h1>{data[0].main.temp.toFixed()}°F</h1>:null}
          </div>
          <div className="description">
          {data[0].weather ?<p>{data[0].weather[0].main}</p>:null}
          </div>
          <div className="Icon">
          {data[0].weather?<img src={imgurl}  width="120" height="100"></img>:null}
          
          </div>
      </div>
       

       {data[0].name!==undefined&&
       <div>
        <h1>{curntday.toUTCString().substr(0, 11).replace(/,/g, '')}</h1>
       <div className="bottom">
           
           <div className="feels">
           {data[0].main ?<p>{data[0].main.feels_like.toFixed()}°F</p>:null}
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data[0].main ?<p>{data[0].main.humidity.toFixed()}%</p>:null}
            <p>humidity</p>
          </div>
          <div className="wind">
          {data[0].wind ?<p>{data[0].wind.speed.toFixed()} MPH</p>:null}
            <p>Wind Speed</p>
          </div>
       </div>
       </div>
       }

{data[1]!==undefined&&

<div className="bottom">
    
    <div className="1st day">
    {data[1]?<img src={imgurl2}  width="120" height="100"></img>:null}
    {data[1] ?<p>{data[1].list[3].main.temp.toFixed()}°F</p>:null}
     
     <p>{day1.toUTCString().substr(0, 3)}</p>
   </div>
   <div className="2nd day">
   {data[1]?<img src={imgurl3}  width="120" height="100"></img>:null}
   {data[1] ?<p>{data[1].list[11].main.temp.toFixed()}°F</p>:null}
     <p>{day2.toUTCString().substr(0, 3)}</p>
   </div>
   <div className="3rd day">
   {data[1]?<img src={imgurl4}  width="120" height="100"></img>:null}
      {data[1] ?<p>{data[1].list[19].main.temp.toFixed()}°F</p>:null}
     <p>{day3.toUTCString().substr(0, 3)}</p>
   </div>
</div>
}
       </div>
    </div>
  );
}

export default App;
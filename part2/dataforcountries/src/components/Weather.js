import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_key = process.env.REACT_APP_API_key;
const Weather = ({capital}) => {
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
    useEffect(()=>{
    console.log(API_key);
    //const API_key = "f9b0980e2264892b044d9d98668ec233";
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_key}&units=metric`)
        .then((res,req)=>{
          //console.log(res.data);
          const data = res.data;
          setTemperature(data.main.temp);
          setWind(data.wind.speed);
          setIcon(data.weather[0].icon);
        })
    },[capital])
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>temperature {temperature} Celsius</div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      <div>wind {wind} m/s</div>
    </div>
  )
}

export default Weather
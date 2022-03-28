import axios from 'axios'
import React, { useEffect } from 'react'

const Weather = ({city}) => {
    useEffect(()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`)
    },[])
  return (
    <div>Weather</div>
  )
}

export default Weather
import React, { useEffect, useState } from 'react'
import Weather from './Weather';

const CountryData = ({country}) => {
    const [lanList, setLanList] = useState([]);
    useEffect(()=>{
        console.log(country);
        const lanObj = country.languages;
        const listLan = Object.keys(lanObj);
        let allLan = [];
        listLan.forEach((lan)=>{
            console.log(allLan);
            allLan = allLan.concat(lanObj[lan]);
        });
        setLanList(allLan);
    }, [country]);
  return (
    <div>
        <h1>{country.name.common}</h1>
        <div>
            capital {country.capital}
            <br></br>
            area {country.area}
        </div>
        <h3>languages:</h3>
        <ul>
            {lanList.map((lan)=>(
                <li>{lan}</li>
            ))}
        </ul>
        <img src={country.flags.png} width={"200px"}/>
        <Weather capital={country.capital[0]}/>
    </div>
  )
}

export default CountryData
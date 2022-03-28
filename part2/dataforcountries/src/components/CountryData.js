import React, { useEffect, useState } from 'react'

const CountryData = ({country}) => {
    const [lanList, setLanList] = useState([]);
    useEffect(()=>{
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
        <img src={country.flags.png}/>
    </div>
  )
}

export default CountryData
import React from 'react'
import CountryData from './CountryData'

const CountriesList = ({countries, handleFil}) => {
    
    if(countries.length > 10){
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if(countries.length>1){
        return (
            <div>{
                countries.map(country => (
                    <div key={country.cca2}>{country.name.common}
                    <button onClick={()=> handleFil(country)}>show</button></div>
                ))
            }</div>
          )
    }
    else if(countries.length === 1){
        return(
            <CountryData country={countries[0]}/>
        )
    }
    else{
        return(<></>)
    }
}

export default CountriesList
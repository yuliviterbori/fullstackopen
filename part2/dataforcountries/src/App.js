import axios from 'axios';
import { useState, useEffect } from 'react'
import CountriesList from './components/CountriesList';


function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('')
  const [filCountries, setFilCountries] = useState([]);
  
  useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((res, req)=>{
      console.log(res);
      setCountries(res.data);
    })
  },[]);
  useEffect(()=>{
    const newfil = countries.filter(c=>(
      c.name.common.toLowerCase().includes(filter.toLowerCase())
    ));
    setFilCountries(newfil);
  },[filter, countries]);
  return (
    <div>
    find countries
    <input value={filter} onChange={e=>setFilter(e.target.value)}/>
    <CountriesList countries = {filCountries} handleFil={(c)=>setFilCountries([c])}/>
    </div>
  );
}

export default App;

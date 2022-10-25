import React, {useState, useEffect} from 'react';
import axios from "axios";
import { ALL_COUNTRIES } from '../config';
import {useNavigate} from 'react-router-dom';
import List from '../componenets/List';
import Card from '../componenets/Card';
import Controls from '../componenets/Controls';

function HomePage() {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();
    console.log(navigate)
    useEffect(() => {
        axios.get(ALL_COUNTRIES)
            .then(({data}) => setCountries(data))
    }, []);

  return (
    <div>
        <Controls />
        <List>
        {
          countries.map(c => {
            const countryInfo = {
              img : c.flags.png,
              name : c.name,
              info : [
                {
                  title : "Population",
                  description : c.population,
                },
                {
                  title : "Region",
                  description : c.region,
                },
                {
                  title : "Capital",
                  description : c.capital,
                },
              ],
            };
            return (
              <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo}/>
            )
          })
        }
        </List>
    </div>
  )
}

export default HomePage
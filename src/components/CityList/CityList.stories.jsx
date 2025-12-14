import React from 'react';
import CityList from './CityList';

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    {city: "CDMX", country: "Mexico"}, 
    {city: "NY", country: "USA"},
    {city: "London", country: "England"},
    {city: "Paris", country: "France"}
]

export const CityListExample = () => <CityList cities={cities}/>
import React from 'react';
import Weather from  './Weather';

export default{
    title:"Weather render cloud",
    component:Weather
}
export const WeatherExample = () => <Weather temperature ={10} state="cloud"/>

export const WeatherExample2 = () => <Weather temperature ={30} state="sunny"/>

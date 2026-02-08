import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import {WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain
} from 'react-icons/wi'
import {IconContext} from 'react-icons'

const validValues = ["cloud", "sunny", "fog", "cloudy", "rain"];

const stateByName = {
  "cloud": WiCloud,
  "sunny": WiDaySunny,
  "fog": WiDayFog,
  "cloudy": WiDayCloudy,
  "rain": WiRain
}

const renderState = (state) =>{
  const IconState = stateByName[state];
  return <IconState/>;
}

export const Weather = ({temperature, state}) => {
  return (
    <div>
      <IconContext.Provider value={{ size:"5em"}}>
        {renderState(state)}
      </IconContext.Provider>
      <Typography display="inline" variant="h2">{temperature}</Typography>
    </div>
  )
}
 

Weather.prototype = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,

}

export default Weather
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const renderCityAndCountry = ({ city, country }) => (
  <Box key={city} sx={{ width: '100%', mb: 2 }}>
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        flexDirection: { xs: 'column', sm: 'row' }, // 👈 CLAVE
        gap: { xs: 1, sm: 0 }                        // 👈 evita amontonado en xs
      }}
    >
      {/* City */}
      <Grid item>
        <CityInfo city={city} country={country} />
      </Grid>

      {/* Weather */}
      <Grid item>
        <Weather temperature={10} state="sunny" />
      </Grid>
    </Grid>
  </Box>
);

const CityList = ({ cities }) => (
  <Box sx={{ width: '100%' }}>
    {cities.map(renderCityAndCountry)}
  </Box>
);

CityList.propTypes = {
  cities: PropTypes.array.isRequired
};

export default CityList;

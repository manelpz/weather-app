import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo';

test('CityInfo render', async() => { 
    
    //Arrange
    const {findAllByRole} = render(<CityInfo city={"CDMX"} country={"Mexico"} />);

      //Act
    const cityAndCountryComponents = await findAllByRole('heading');

     //Assert
    expect(cityAndCountryComponents[0]).toHaveTextContent("CDMX");
    expect(cityAndCountryComponents[1]).toHaveTextContent("Mexico");

 })
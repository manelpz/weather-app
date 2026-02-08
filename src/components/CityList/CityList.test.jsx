import React from 'react';
import { render, screen } from '@testing-library/react';
import CityList from './CityList';

const cities = [{city: "Buenos Aires", country: "Argentina"}, 
                {city: "Madrid", country: "Spain"}]

test('City List render', async () =>{

    const { findAllByRole } = render(<CityList cities={cities} />);
    const items = await findAllByRole("listitem");
    expect (items).toHaveLength(2);
    });
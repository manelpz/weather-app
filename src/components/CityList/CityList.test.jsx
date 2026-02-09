import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CityList from './CityList';

const cities = [{city: "Buenos Aires", country: "Argentina"}, 
                {city: "Madrid", country: "Spain"}]

test('City List render', async () =>{
    const { findAllByRole } = render(<CityList cities={cities} />);
    const items = await findAllByRole("listitem");
    expect (items).toHaveLength(2);
    });

test('City List click on item', async () =>{
    const fbClickOnItem = jest.fn();
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fbClickOnItem}/>);
    const items = await findAllByRole("listitem");

    fireEvent.click(items[0]);
    expect(fbClickOnItem).toHaveBeenCalledTimes(1);
});
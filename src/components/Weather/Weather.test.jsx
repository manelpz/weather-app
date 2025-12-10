 import React from "react"
 import Weather from "./Weather";
 import { render } from "@testing-library/react";

 test("Weather render", async () => {

   //Arrange
   const { findByRole } = render(<Weather temperature={10}/>);

   //Act
   const temperatureComponent = await findByRole("heading");

   //Assert
   expect(temperatureComponent).toHaveTextContent("10");

 });

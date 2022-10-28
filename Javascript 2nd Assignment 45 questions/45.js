/*
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
*/

const car_information = {};

function car(manufacturer, model, ...arguments)
    {
        car_information[`manufacturer`] = manufacturer;
        car_information[`model`] = model;
        car_information[`color`] = arguments[0];
        car_information[`fuel`] = arguments[1];
        car_information[`mileage`] = arguments[2];
        
        return console.log(car_information);
    }

car(`Honda`, 2005, `black`, `petrol`, `12km/litre`);

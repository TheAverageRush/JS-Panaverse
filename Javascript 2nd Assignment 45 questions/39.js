/*
City Names: Write a function called city_country() that takes in the name of a city
 and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s 
returned..
*/
let city;
let country;

function describe_city(city, country = `Pakistan`)
{
    return console.log(`${city}, ${country}`);

}   

describe_city(`lahore`);

describe_city(`Quetta`);

describe_city(`paris`,`France`);
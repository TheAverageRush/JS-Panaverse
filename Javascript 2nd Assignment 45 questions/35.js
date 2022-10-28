/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
*/

let animals = [`cat`,`dog`, `rabbit`];

for (let x = 0; x < animals.length; x++)
    {
        console.log(animals[x]);
    }

/*
Modify your program to print a statement about each animal, such as A dog would make a great pet. 
*/

for (let x = 0; x < animals.length; x++)
    {
        console.log(`${animals[x]} is one of my favorite pets.`);
    }

/*
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!
*/

console.log(`${animals} all domesticated animals`);
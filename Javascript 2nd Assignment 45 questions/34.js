/*
Pizzas: Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
*/

let pizza = [`Cheese Pizza`, `Pepperoni Pizza `, `BBQ Chicken Pizza`];
for (let x =0; x < pizza.length; x++)
    {
        console.log(`${pizza[x]}`);
    }

/*
Modify your for loop to print a sentence using the name of the pizza instead of printing 
just the name of the pizza. For each pizza you should have one line
 of output containing a simple statement like I like pepperoni pizza.
 */

 for (let x =0; x < pizza.length; x++)
    {
        console.log(`I am ordering ${pizza[x]}`);
    }

/*
 Add a line at the end of your program, outside the for loop, that states 
how much you like pizza. The output should consist of three or more lines about 
the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/

console.log(`I like ${pizza[0]}, ${pizza[1]} and ${pizza[2]}. I prefer extra cheese as toppings. Broadway is my favorite pizza brand. I really love ${pizza[2]}.`); 
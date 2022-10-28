/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
that should be printed on the shirt. The function should print a 
sentence summarizing the size of the shirt and the message printed on it. Call the function. 
*/

let size = prompt(`Enter the size of the shirt: `);
let message = prompt(`Enter the message to be printed on the shirt: `);
function make_shirt (size, message)
    {
        console.log(`The size of this shirt is ${size}\n${message}`);
    }
make_shirt(size,message);


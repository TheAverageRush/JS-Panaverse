/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and
  a shirt of any size with a different message.
*/

let size;
let message;
function make_shirt (size, text)
    {
        if (size == `large` || size == `medium`)
            {
                console.log(message);
            }
        else
        {
            message = `The size of this shirt is ${size}\n${message}`;
            console.log(message);
        }
    }
make_shirt(size = `large`,message = ` I love javascript`);
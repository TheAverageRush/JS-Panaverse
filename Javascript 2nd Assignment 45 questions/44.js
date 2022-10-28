/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time.
*/

let sandwitch_items_1 = [`olives`];
let sandwitch_items_2 = [`olives`, `cheese`];
let sandwitch_items_3 = [`olives`, `cheese`, `egg`, `salad`];

function sandwitch_items(sandwitch_items)
    {
        console.log(`The sandwitch will contain: `);
        for (let i = 0; i < sandwitch_items.length; i++)
            {
                console.log(sandwitch_items[i]);
            }
    }

sandwitch_items(sandwitch_items_1);
sandwitch_items(sandwitch_items_2);
sandwitch_items(sandwitch_items_3);

/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added to each 
magician’s name.
*/

let magicians = [`A`, `E`, `I`, `O`, `U`];


let magicians_copy =[];


function make_great(magicians)
    {
        
        for (let j = 0; j < magicians.length; j++)
            {
                magicians_copy.push(magicians[j]);
                magicians_copy[j] = `Great ` +  magicians_copy[j];
                
            }
    }

  function show_magicians(magicians)
    {
        make_great(magicians);
        for ( let i = 0; i < magicians_copy.length; i++)
            {
                console.log(`Original array: ${magicians[i]} \t Modified array: ${magicians_copy[i]}`);
            }
    }

show_magicians(magicians);



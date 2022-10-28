/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified*/

let magicians = [`A`, `E`, `I`, `O`, `U`];



function make_great(magicians)
    {
        for (let j = 0; j < magicians.length; j++)
            {
                magicians[j] = `Great ` +  magicians[j];
                
            }
    }

    function show_magicians(magicians)
    {
        make_great(magicians);
        for ( let i = 0; i < magicians.length; i++)
            {
                console.log(magicians[i]);
            }
    }

show_magicians(magicians);

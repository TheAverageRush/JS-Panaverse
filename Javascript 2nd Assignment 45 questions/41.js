/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

let magicians = [`A`, `E`, `I`, `O`, `U`];

function show_magicians(magicians)
    {
        for ( let i = 0; i < magicians.length; i++)
            {
                console.log(magicians[i]);
            }
    }

show_magicians(magicians);
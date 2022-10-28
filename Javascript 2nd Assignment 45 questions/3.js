/*The following program promts the user to enter his/her name 
and then show his/her name in upper case, lower case and title case in the console*/
let name = prompt("Please enter your name: ");
console.log("Your name in upper case is: "  + name.toUpperCase());
console.log("Your name in lower case is: "  + name.toLowerCase());

let titleCase=[];

for(let i = 0; i < name.length; i++)
    {   
        if (i == 0)
        {
          titleCase[i] = name[i].toUpperCase();
        }

        else if (name[i-1] == " ")
        {
            titleCase[i] = name[i].toUpperCase();
        }
        
        else
        {
            titleCase[i] = name[i].toLowerCase();
        }
    }


name = "";

for (let i = 0; i < titleCase.length; i++)
    {
        name = name + titleCase[i];
    }

console.log("Your name in title case is: " + name);
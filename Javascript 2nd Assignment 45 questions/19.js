/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/

let guest_list = [`Hamid`,`Ijaz`,`Fakhur`];

for (let i = 0; i < guest_list.length; i++)
{
    console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm`);
}
//Modification in exercise 14 to indicate the number of people being invited for dinner.
console.log(`\n\nI am inviting ${guest_list.length} people at my house for dinner on Wednesday 5th October 2022 at 8:00 pm `)
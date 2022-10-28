/*Shrinking Guest List: You just found out that your new dinner table won’t 
arrive in time for the dinner, and you have space for only two guests. Start 
with your program from Exercise 16. Add a new line that prints a message saying 
that you can invite only two people for dinner. Remove guests from your list one 
at a time until only two names remain in your list. Each time you pop a name from 
your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner. Print a message to each of the two people still on your list, 
letting them know they’re still invited. Remove the last two names from your list, 
so you have an empty list. Print your list to make sure you actually have an empty 
list at the end of your program.*/

var guest_list = [`Hamid`,`Ijaz`,`Fakhur`];

for (let i = 0; i < guest_list.length; i++)
    {
        console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm\n`);
    }

console.log(`Unfortunately ${guest_list[2]} will not be able to attend the dinner due to personal commitments\n`);

guest_list[2] = `Kashif`;


for (let i = 0; i < guest_list.length; i++)
    {
        console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm\n`);
    }

console.log("Three more guests will be joining us as I have found a bigger dinner table");

guest_list.unshift(`Faheem`);

guest_list.splice(2,0,`saqib`);

function append(new_guest, array)
    {
        return array.push(new_guest);
    }

append(`Usman`, guest_list)


for (let i = 0; i < guest_list.length; i++)
    {
        console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm\n`);
    }

console.log(`Unfortunately, due to unforseen circumstances, now I can invite only two guests. `);


while (guest_list.length > 2)
    {
        console.log(`Dear ${guest_list.pop()}, please accept my sincere apologies as I can not invite you to the dinner due to unforseen circumstances.\n`);
    }

for (let i = 0; i < guest_list.length; i++)
    {
        console.log(`Dear ${guest_list[i]}, just wanted to let you know that you are still invited to the dinner.\n `);
    }

for (let i = 0; i <= guest_list.length; i++)
    {
        guest_list.pop();
    }

console.log(`The guest list after removing everyone: ${guest_list}\n`);

console.log(`Number of people in the guest list: ${guest_list.length}`);
/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner. Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger 
dinner table. Add one new guest to the beginning of your array. Add one new guest to the middle of your array.
Use append() to add one new guest to the end of your list.
Print a new set of invitation messages, one for each person in your list.*/

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

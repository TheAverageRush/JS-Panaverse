/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/

var guest_list = [`Hamid`,`Ijaz`,`Fakhur`];

for (let i = 0; i < guest_list.length; i++)
{
    console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm\n`);
}

console.log(`Unfortunately ${guest_list[2]} will not be able to attend the dinner due to personal commitments`);

guest_list[2] = `Kashif`;
console.log(guest_list);

for (let i = 0; i < guest_list.length; i++)
{
    console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm\n`);
}
/*Guest List: If you could invite anyone, living or deceased, 
 dinner, who would you invite? Make a list that includes at least 
 three people you’d like to invite to dinner. Then use your list to
  print a message to each person, inviting them to dinner.*/

let guest_list = [`Hamid`,`Ijaz`,`Fakhur`];

for (let i = 0; i < guest_list.length; i++)
{
    console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm`);
}


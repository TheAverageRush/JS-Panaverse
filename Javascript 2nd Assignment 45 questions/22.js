/*Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.*/

var guest_list = [`Hamid`,`Ijaz`,`Fakhur`];

for (let i = 0; i < guest_list.length; i++)
{
    console.log(`Dear ${guest_list[i]}, you are invited at my house for dinner on Wednesday 5th October 2022 at 8:00 pm\n`);
}
//Here the index has been intentionally set to 3 to produce an index error.
console.log(`Unfortunately ${guest_list[4]} will not be able to attend the dinner due to personal commitments`);


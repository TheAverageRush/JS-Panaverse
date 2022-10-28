/*Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//Tests for equality and inequality with strings
console.log(`Is Honda = honda? | predict False.`);
console.log(`Honda` == `honda`);

console.log(`Is honda = honda? | predict True.`);
console.log(`honda` == `honda`);

//Tests using the lower case function
let name = `FURQAN`;
console.log(`Is FURQAN = furqan? | predict False.`);
console.log(`FURQAN` == name.toLowerCase());

let person = `ASIF`

console.log(`Is asif = asif? | predict True.`);
console.log(person.toLowerCase() == `asif`);

/*Numerical tests involving equality and inequality, greater than and less than, greater 
than or equal to, and less than or equal to*/
console.log(`Is 22 = 22 | predict True.`);
console.log(22 == 22);

console.log(`Is 2 = 22 | predict False.`);
console.log(2 == 22);

//Tests using "and" and "or" operatorsTests using "and" and "or" operators
console.log(`Is 33 equal to 33 and 33 greater than 34 | predict False.`);
console.log(33 == 33 && 33 > 34);

console.log(`Is 33 equal to 33 or 33 greater than 34 | predict True.`);
console.log(33 == 33 || 33 > 34);

//Test whether an item is in a array

let my_list = [1,2,3,4,5];
console.log(`Is 2 in my list | predict True.`);
console.log(my_list.includes(2));

console.log(`Is 9 in my list | predict False.`);
console.log(my_list.includes(9));

//Test whether an item is not in a array

let team = [`asif`,`amir`,`atif`,`arif`];
console.log(`negation of arif is in the list | predict False.`);
console.log(!team.includes(`arif`));

console.log(`negation of zain is not in the list | predict True.`);
console.log(!team.includes(`zain`));
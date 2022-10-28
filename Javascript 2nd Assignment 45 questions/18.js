//Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
let places = [`Mount Everest`,`K2`, `Kangchenjunga`,`Makalu`, `Cho Oyu`];

//Print your array in its original order.
console.log(`\nPlaces list in original order: \t${places}\n`);

//Print your array in alphabetical order without modifying the actual list.
let ordered_list = [];
for (let i = 0; i < places.length; i++)
    {
        ordered_list[i] = places[i];
    }

//console.log(ordered_list);
console.log(`\nPlaces list in alphabetical order: \t${ordered_list.sort()}\n`);

//Show that your array is still in its original order by printing it.
console.log(`\nPlaces list in original order: ${places}\n`);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`\nPlaces list in reverse order: \t${ordered_list.reverse()}\n`);

//Show that your array is still in its original order by printing it again.
console.log(`\nPlaces list in original order: ${places}\n`);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log(`\nOriginal places list in reverse order; ${places.reverse()}\n`);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`\nPlaces list in original form: ${places.reverse()}\n`);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort()
console.log(`\nPlaces list in alphabetical order: ${places}\n`);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse()
console.log(`\nPlaces list in reverse alphabetical order: ${places}\n`);
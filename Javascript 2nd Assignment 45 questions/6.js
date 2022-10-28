/*Stripping Names: Store a person’s name, and include some whitespace characters at the 
beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces.*/


var name_with_whitepaces = "\n\t\tNamer Afzal Khan\n\t"

console.log("Name with whitespaces: " + name_with_whitepaces);

var name_without_tab = name_with_whitepaces.replace(/\t/g,"");
console.log("Name without horizontal tab: " + name_without_tab);
var name_without_newline = name_without_tab.replace(/\n/g,"");
console.log("Name without newline: " + name_without_newline);


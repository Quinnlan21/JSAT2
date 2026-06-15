// File system module used to write and read files.
const fs = require("fs");

// String variables 
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Quinnlan";

console.log("myString:", myString);
console.log("anotherString:", anotherString);
console.log("hello:", hello);
console.log("myName:", myName);

// Finds the length and characters of myString.
console.log("Length of myString:", myString.length);
console.log("First character:", myString.charAt(0));
console.log("11th character:", myString.charAt(10));

// Uses slice and substring.
console.log("Slice 'is a':", myString.slice(5, 9));
console.log("Substring 'the':", anotherString.substring(5, 8));

// Changes myName to upper and lower case.
console.log("Uppercase name:", myName.toUpperCase());
console.log("Lowercase name:", myName.toLowerCase());

// Uses concat, trim, replace and split.
console.log("Concat:", hello.concat(" ", myName));
console.log("Trim:", anotherString.trim());
console.log("Replace:", myString.replace("is a", ""));
console.log("Split:", myString.split(" "));

// Data to save into the text file.
let fileData = "This text was saved into output.txt for Part B3.";

// Writes the string to output.txt.
fs.writeFileSync("output.txt", fileData);

console.log("File has been written successfully.");

// Reads the text from output.txt.
let fileContent = fs.readFileSync("output.txt", "utf8");

console.log("Text read from file:", fileContent);
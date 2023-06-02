// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code: 

const {readFileSync, writeFileSync} = require('fs');
// This line imports the readFileSync and writeFileSync functions from the Node.js fs module.



const fs = require('fs');


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//The readFileSync function is used with the file paths as the first argument 
// as the second argument, which specifies the encoding of the file as UTF-8. The file contents are stored in the variables 


console.log(first, second);


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
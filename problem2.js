// Coding Problem 2 

// What is happening in the following code snippet?  Assume the following:


// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code: 





const {readFile, writeFile} = require('fs'); // This line imports the readFile and writeFile functions from the Node.js fs module. 
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=> { //The readFile function is used with the file path as the first argument, 
   if (err) {
       console.log(err);
       return 
   }
   const first = result;
   console.log(result);
   readFile('./content/second.txt','utf8', (err, result)=> { //second.txt using the same encoding and a similar callback function.
       if (err) {
           console.log(err);
           return 
       }
       const second = result;// This code block is similar to the previous one but reads the contents of the file second.txt instead.
       console.log(result);
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
           if (err) {// If an error occurs during the file write, it will be stored in the err
               console.log(err);
               return 
           }
           console.log('done with the task');//If the writing is successful, it logs "done with the task" to the console.
       }
       );
   })
});


console.log('starting next task');

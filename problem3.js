// Coding Problem 3

// What is happening in the following code snippet? 

const getTodos = () => { // The getTodos function is defined as an arrow function.
    const request = new XMLHttpRequest();//Inside the function, a new XMLHttpRequest object is created and assigned to the request variable.
   
   
   request.addEventListener('readystatechange', ()=>{ //his event fires whenever the readyState property of the request changes.
   
   
    if(request.readyState === 4 && request.status ===200){ //readyState is for indicating that the operation has been completeds 200 (indicating a successful response).
      console.log(request.responseText)
       }
      else if (request.readyState === 4){ // could not fetch the data" to the console.
        console.log('could not fetch the data');
      }
   });
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
   request.send();//Finally, the send method is called to send the request to the server.
   }
   
   
   
   
   getTodos();
   getTodos();
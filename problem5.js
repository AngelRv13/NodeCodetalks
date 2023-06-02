// Coding Problem 5
// What is happening in the code below? Why is this important? What would you use mySQL for?  Can you give an example?  

// Assume that you have already installed ran npm install mysql


var mysql=require('mysql');//the mysql module is imported using require('mysql').
var connection=mysql.createConnection({//The createConnection method is called on the mysql object to create a connection object
  host:'localhost',//The hostname or IP address of the MySQL server. In this case, it is set to 'localhost'.
  user:'your username',//The username to authenticate with the MySQL server
  password:'your password',//The password to authenticate with the MySQL server.
  database:'your database name'// The name of the MySQL database to connect to.
});
connection.connect(function(error){ //The connect method is called on the connection object to establish a connection to the MySQL server
  if(!!error){
    console.log(error);//If an error occurs, the error object is logged to the console using 
  }else{
    console.log('Connected!:)');
  }
}); 
module.exports = connection;//connection object is exported using module.exports, making it available for other modules to use.
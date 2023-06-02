// Coding Problem 4
// What is happening in the code below?  

// Assume that you have already installed ran npm install body-parser and ​npm install express-validator cors 




validation.js
const { check } = require('express-validator');//In the validation.js file, the signupValidation and loginValidation exports are defined as arrays. Each array contains validation checks 
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),//checks that the 'name' field is not empty.
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),//checks that the 'email' field is a valid email address and normalizes it by removing dots from Gmail addresses.
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]     //checks that the 'password' field has a minimum length of 6 characters.



Server.js file
const createError = require('http-errors');//The required dependencies and modules are imported.
const express = require('express');//The express application is created.
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
app.use(express.json());//Middleware is set up using app.use() to handle JSON parsing, URL encoding, and CORS.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
});
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
app.listen(3000,() => console.log('Server is running on port 3000'));
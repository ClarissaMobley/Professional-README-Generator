// Include packages needed for this application

//Step One: Create Variables for npm packages
const inquirer = require('inquirer');
const fs = require('fs');


// Create an array of questions for user input
// const questions = [];
// Step Two: Create an inquirer prompt
inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'Project Title',
        },
        {
            type: 'list',
            message: 'Table of Contents',
            choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
            name: 'Table of Contents',
        },
        {
            type: 'input',
            message: 'Please describe your project.',
            name: 'Description',
        },
        {
           type: 'input',
           message: 'Enter installation instructions',
           name: 'Installation',
        },
        {
            type: 'input',
            message: 'Enter usage information',
            name: 'Usage'
        }
        
    ])
    .then((response) => {
        console.log(response);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

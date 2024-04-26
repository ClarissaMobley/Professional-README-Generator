// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "checkbox",
    message: "Please select which license was used for this project.",
    choices: ("MIT", "Apache 2.0", "GPL 3.0", "None"),
    name: "License",
  },
  {
    type: "input",
    message: "Please describe your project.",
    name: "description",
  },
  //   {
  //     type: "list",
  //     message: "Table of Contents",
  //     choices: [
  //       "Description",
  //       "Installation",
  //       "Usage",
  //       "License",
  //       "Contributing",
  //       "Tests",
  //       "Questions",
  //     ],
  //     name: "Table of Contents",
  //   },
  {
    type: "input",
    message: "Enter installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter who contributed to the project",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your GitHub username",
    name: "username",
  },

].then((response) => {
  console.log(response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

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
    type: "input",
    message: "Please describe your project.",
    name: "description",
  },
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
    message: "Please enter who contributed to the project",
    name: "contributing",
  },
  {
    type: "checkbox",
    message: "Please select which license was used for this project.",
    choices: ("MIT", "Apache 2.0", "GPL 3.0", "None"),
    name: "License",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

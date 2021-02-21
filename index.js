// Packages required for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/index.html');

// Array of questions for user input

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the team manager.',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID number of the team manager.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email of the team manager.',
    },
    {
      type: 'input',
      name: 'number',
      message: 'What is the office number of the team manager?',
    },
    {
      type: 'list',
      name: 'nextChoice',
      message: 'What type of team member would you like to add next?',
      choices: ['Engineer', 'Intern', 'I am done adding members'],
    },
  ])
}

// Function to add engineers
// Function to add interns
// Function to generate html

// Function to initialize app
promptUser();
// Packages required for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateHtml = require('./src/index.html');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = []


// Function to add Manager
function addManager() {
  inquirer.prompt([
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
      name: 'officeNumber',
      message: 'What is the office number of the team manager?',
    },
  ])
  .then(function(responses) {
    console.log(responses)
      let newManager = new Manager (responses.name, responses.id, responses.email, responses.officeNumber)
    team.push(newManager)

    addAnother()
  })
}

// Function to add engineers
function addEngineer () {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the engineer.',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID number of the engineer.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email of the engineer.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the Github username of the engineer?',
    },
  ])
  .then(function(responses) {
    console.log(responses)
      let newEngineer = new Engineer (responses.name, responses.id, responses.email, responses.github)

      team.push(newEngineer)

    addAnother()
  })
}

// Function to add interns
function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of the intern.',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID number of the intern.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the email of the intern.',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the school of the intern?',
    },
  ])
  .then(function(responses) {
    let newIntern = new Intern (responses.name, responses.id, responses.email, responses.school)

    team.push(newIntern)

    addAnother()
  })
}

function addAnother(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'nextChoice',
      message: 'What type of team member would you like to add next?',
      choices: ['Engineer', 'Intern', 'I am done adding members'],
    },
  ])
  .then(function(responses){
    // Conditional logic based on users choice to the question about what to do next (new engineer, intern, or done)
    if (responses.nextChoice == 'Engineer') {
      addEngineer()
    }
    else if (responses.nextChoice == 'Intern') {
      addIntern()
    }
    else {
      generateHtml()
    }
  })
}

// Function to generate html
function generateHtml(){
  let myString = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
  <div>
  <h1> Team Profile Generator </h1>

  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${Manager.name}</span>
        <p>Employee Id: ${Manager.id}</p>
        <p>Office Number: ${Manager.officeNumber}</p>
      </div>
      <div class="card-action">
        <a href="mailto:${Manager.email}">Email</a>
      </div>
    </div>
  </div>
</div>

<div class="row">
<div class="col s12 m6">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${Engineer.name}</span>
      <p>Employee Id: ${Engineer.id}</p>
      <p>Office Number: ${Engineer.officeNumber}</p>
    </div>
    <div class="card-action">
      <a href="mailto:${Engineer.email}">Email</a>
    </div>
  </div>
</div>
</div>
  </div>`

  myString += `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
  </html>`
  console.log(team);


fs.writeFile("./dist/index.html", myString, function(error){console.error(error)})
}

// Call to initialize app
addManager();
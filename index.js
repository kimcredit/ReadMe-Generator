const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

function askQuestions () {
  // array of questions for user
  return inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "Please provide a project title"
      },
      {
        type: "input",
        name: "Description",
        message: "Please provide a brief description of your application"
      },
      {
        type: "input",
        name: "Installation",
        message: "Please provide any necessary installation instructions"
      },
      {
        type: "input",
        name: "Installation",
        message: "Please provide information on the use of your project"
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors for this project"
      },
      {
        type: "input",
        name: "test",
        message: "Please provide information on any tests you wrote for this project"
      },
      {
        type: "checkbox",
        name: "licenses",
        message: "Please select a license your project:",
        choices: [
          {name: "Apache 2", value: "Apache 2"},
          {name: "MIT", value: "MIT"},
          {name: "GPL", value: "GPL"}
        ]
      },
      {
        type: "input",
        name: "username",
        message: "Please enter your Github username"
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address"
      }
    ]);
  };

function generateReadMe(answers) {
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize programs
function init() {

}

// function call to initialize program
init();


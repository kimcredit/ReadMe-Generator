const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function askQuestions() {
  // array of questions for user
  return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Please provide a project title"
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your application"
      },
      {
        type: "input",
        name: "installation",
        message: "Please provide any necessary installation instructions"
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide information on the use of your project"
      },
      {
        type: "input",
        name: "contributions",
        message: "Please give information about contribution guidelines"
      },
      {
        type: "input",
        name: "tests",
        message: "Please provide information on any tests you wrote for this project"
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select any licenses for your project:",
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

// function to write README file
function writeToFile(data) {
  writeFileAsync("README.md", data);
}

// function to initialize programs
function init() {
  askQuestions ()
  .then(function (answers) {
    writeToFile(markdown(answers));
  })
}

// function call to initialize program
init();


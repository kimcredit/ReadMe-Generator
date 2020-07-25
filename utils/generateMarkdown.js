// function to generate markdown for README
function generateMarkdown(answers) {

//generate a badge for the user's selected license
let licenseBadge;

 if (answers.license[0] === "Apache 2") {
  licenseBadge = "![Apache 2](https://img.shields.io/badge/license-Apache%202-9cf)";
} else if (answers.license[0] === "MIT") {
  licenseBadge = "![MIT](https://img.shields.io/badge/license-MIT-9cf)";
} else if (answers.license[0] === "GPL") {
  licenseBadge = "![GPL](https://img.shields.io/badge/license-GPL-9cf)";
} else {
  licenseBadge = "";
};

return `
# ${answers.title}

${licenseBadge}

# Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${answers.installation}

## Usage
${answers.usage}

## Licenses 
This application is covered under ${answers.license}.

## Contributions
${answers.contributions}

## Tests
${answers.tests}

## Questions
Have questions about this application? Reach out at <${answers.email}>.

You can also see some of my other work at <https://github.com/${answers.username}>.    
`
}

module.exports = generateMarkdown;

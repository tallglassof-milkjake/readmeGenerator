const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for this repo?"
      },
      {
        type: "input",
        name: "description",
        message: "A brief description of the application?"
      },
      {
        type: "input",
        name: "installation",
        message: "How do you install this application?"
      },
      {
        type: "input",
        name: "contributions",
        message: "Are there any contribution guidelines to follow?"
      },
      {
        type: "input",
        name: "test",
        message: "Are there any instructions regarding testing"
      },
      {
        type: "list",
        message: "What licensing is needed for this application",
        name: "license",
        choices: [
          "Apache license 2.0",
          "MIT",
          "GNU General Public License v3.0",
          "Academic Free License v3.0"
        ]
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github user name"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address"
      },
];



// function to write README file
async function writeToFile(fileName, data) {

    inquirer.prompt(questions);
    
    fs.writeFile(data.title + '.txt', data, (err) => {
        if (err) throw err;
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


writeToFile()
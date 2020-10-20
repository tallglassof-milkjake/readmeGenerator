const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user




// function to write README file
async function writeToFile() {

  inquirer.prompt([
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
  ]).then(async function promptData(data) {
    
    console.log("data achieved");
    console.log(data);

    const myFile = `
      # ${data.title}
      
      ## Table of Contents
      
      ### ${data.description}
      
      ### ${data.installation}
      
      ### ${data.contributions}
      
      ### ${data.test}
      
      ### Questions

      **Any questions please contact me either [here](${data.github}) or at ${data.email}`;

    fs.writeFile(`${data.title}.txt`, myFile, (err) => {
      if (err) {
        console.log(err)
      };
      
    });
  });  
  
};

// function to initialize program
async function init(data) {
    writeToFile();

    

}

// function call to initialize program
init();

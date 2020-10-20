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
          "Mozilla Public License 2.0"
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

    let myLicense = "";

    if (data.license === "Apache license 2.0") {
      myLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    } else if (data.licence = "MIT") {
      myLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.license = "GNU General Public License v3.0") {
      myLicense = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
    } else {
      myLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
    }

    console.log(myLicense)

    const myFile = `
      ${myLicense}
      # ${data.title}
      
      ## Table of Contents
      * **[Description](#Description)**
      * **[Installation](#Installation)**
      * **[Constributions](#Contributions)**
      * **[Testing](#Testing)**
      * **[Questions](#Questions)**
      
      ### Description
      ${data.description}
      
      ### Installation
      ${data.installation}
      
      ### Constributions
      ${data.contributions}
      
      ### Testing
      ${data.test}
      
      ### Questions

      **Any questions please contact me either [here](${data.github}) or at ${data.email}`;

    fs.writeFile(`${data.title}.md`, myFile, (err) => {
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

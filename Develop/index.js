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
    
    const myReadme = `
    # ${questions.title}
    
    ## Contents
    1.[Description](#Description)
    1.[Installation](#Installation)
    1.[Contributing](#Contributing)
    1.[Tests](#Tests)
    1.[Questions](#Questions)
    
    ## Description
    **${questions.description}**
    
    ## Installation
    **${questions.installation}**
    
    ## Contributing
    **${questions.contributions}**
    
    ## Tests
    **${questions.test}
    
    ## Questions
    If you have any questions find my [Here](${questions.github}) or email me at ${questions.email}!`
    
    function writeFile (err, data) {
        if (err) throw err;

        await
        fs.writeFile(`${data.title}.txt`, myReadme, (err) => {
            if (err) throw err;
        }) 
    }
    writeFile();
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();

writeToFile();
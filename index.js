// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter your project name: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project: ',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? ',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],    
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies: ',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests? ',
        default: 'npm test'
    },

    {
        type: 'input',
        name: 'knowledgeAboutRepo',
        message: 'What does the user need to know about using the repo? '
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo? '
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err): console.log('Commited to README.md file') )
    // return fs.writeFileSync(path.joinfileName)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(returnValues =>{
        //console.log('response:',returnValues)
       // console.log(generateMarkdown(returnValues))
        console.log('GENERATING README File...');
        console.log('Wait please while generating...');

        // using the setTimeout function to give user experience that something is being generated in background
        setTimeout(writeFunction, 7000);
        
        // after the setTimeout is complete then data is written to the README.md file
        function writeFunction(){
            writeToFile('./ReadMe_File/README.md', generateMarkdown(returnValues));
        }

    });
    
};

// Function call to initialize app
init();

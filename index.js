/* 
Variables ------------------------------------------------------------------------------*/
    const inquirer = require('inquirer');
    const fs = require('fs');
//



/* 
Functions ------------------------------------------------------------------------------*/

    // - Initalize the app
    const init = () => {
        promptUser()
            .then(writeToFile('README.md', generateMarkdown(answers)));
    };

    // - Prompt for the README.md generator
    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Please enter the Title/Name of your project :'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a Description for your project :'
            },
            {
                type: 'list',
                name: 'tableOfContentsConfirm',
                message: 'Would you like to include a Table of Contents? (OPTIONAL)',
                choices: ['Yes', 'No']
            },
            {
                type: 'input',
                name: 'installationInstructions',
                message: 'Please enter step-by-step instructions on how to Install your project :'
            },
            {
                type: 'input',
                name: 'usageInstructions',
                message: 'Please enter what your recommended Usages are, or any examples you would like to link :'
            },
            {
                type: 'input',
                name: 'collaborators',
                message: 'Please enter all the collaborators (including yourself) using this format - [GitHub_username](link_to_GitHub) :'
            },
            {
                type: 'list',
                name: 'testsConfirm',
                message: 'Would you like to include any test links of this project?',
                choices: ['Yes', 'No']
            },
            {
                type: 'input',
                name: 'tests',
                message: 'If you have any test links, please enter them here using this format - [test_name](test_link) :'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select which License you would like to include :',
                choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License', 'Unlicense License']
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your GitHub Username :'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your Email Address :'
            }
        ]);
    };

    // - Write the README.md file
    const writeToFile = (fileName, data) => {
        fs.writeFile(fileName, data, (error) =>
            error ? console.log(error) : console.log('Congrats! A README.md file for your project has been generated.')
        );
    };

    // - Create the license section
    const renderLicenseSection = (license) => {
    };

    // - Create the license link
    const renderLicenseLink = (license) => {
    };

    // - Create license badge
    const renderLicenseBadge = (license) => {
    };

    // - Generate the README.md file
    const generateMarkdown = (answers) => {
        return `# ${answers.title}`;
    };

//
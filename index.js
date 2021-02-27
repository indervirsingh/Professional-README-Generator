/* 
Variables ------------------------------------------------------------------------------*/
    const inquirer = require('inquirer');
    const fs = require('fs');
    let badge;
//



/* 
Functions ------------------------------------------------------------------------------*/

    // - Initialize the app
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
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
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

    // - Create license badge
    const renderLicenseBadge = (license) => {
        switch (license) {
            case 'GNU AGPLv3':
                badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
                break;
            case 'GNU GPLv3':
                badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                break;
            case 'GNU LGPLv3':
                badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
                break;
            case 'Mozilla Public License 2.0':
                badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
                break;
            case 'Apache License 2.0':
                badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                break;
            case 'Boost Software License 1.0':
                badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
                break;
            case 'The Unlicense':
                badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
                break;
            case 'MIT License':
                badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                break;
            default:
                badge = '';
        };

    };

    // - Generate the README.md file
    const generateMarkdown = (answers) => {

        // Create the badge for the license
        renderLicenseBadge(answers.license);

        // Needs to be parsed properly: [GitHub_username](link_to_GitHub)
        let collaborators = `${answers.collaborators}`;

        // Needs to be parsed properly: [test_name](test_link)
        let tests = `${answers.tests}`;

        let readmeContent = `
        # ${answers.title}

        ## Description
        ${answers.description}

        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Collaborators](#collaborators)
        * [Testing](#testing)
        * [License](#license)
        * [Questions](#questions)

        ## Installation
        ${answers.installationInstructions}

        ## Usage
        ${answers.usageInstructions}

        ## Collaborators
        ${answers.collaborators}

        ## Testing
        ${answers.tests}

        ## License 
        Licensed under ${answers.license}

        ## Questions
        If you have questions regarding this project, please contact me through email at ${answers.email}


        `;

        return readmeContent;
    };

//

init();
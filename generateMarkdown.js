// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license === "Apache-2.0" ){

    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  }
  if (license.license === "LICENSE_1_0.txt" ){// diffrent badge numbers

    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"

}
if (license.license === "BSD-3-" ){// diffrent badge numbers

  return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//how do you put a link inside an MD file- 
//use the same process as the above

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## DESCRIPTION
${data.description}

## Table of Contents

[Installation]

[Usage]

[License]

[Contributing]

[Tests]

[Questions]



## Installation

Here are the dependecies that must be installed to run this project: ${data.Installation}

## Usage

This project is used for: ${data.Usage}

## License

This project has the following license: ${renderLicenseBadge(data)}

## Contributing

Contributors to this project:${data.Contrubuting}

## Tests

If tests are needed please run the following command: ${data.Tests}

## QUESTIONS

If you have any questions please fill free to contact me through GitHub :
${data.GitHub}    

or send an email to

${data.Email} `

}

module.exports = generateMarkdown

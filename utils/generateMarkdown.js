// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if(license !== 'None')
  {
    //return 'https://img.shields.io/badge/License-apache%20license%202.0-blue'
    //return `https://img.shields.io/badge/license-${license}-blue.svg`
    if(license === 'APACHE 2.0')
    {
      licenseSplitArray = splitLicense(license);
      return `![GitHub license](https://img.shields.io/badge/License-apache%20${licenseSplitArray[0]}%20${licenseSplitArray[1]}-blue)`
    }
    if(license === 'GPL 3.0')
    {
      licenseSplitArray = splitLicense(license);
      return `![GitHub license](https://img.shields.io/badge/License-apache%20${licenseSplitArray[0]}%20${licenseSplitArray[1]}-blue)`
    }
    if(license === 'BSD 3')
    {
      licenseSplitArray = splitLicense(license);
      return `![GitHub license](https://img.shields.io/badge/License-apache%20${licenseSplitArray[0]}%20${licenseSplitArray[1]}-blue)`
    }
    else
    {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    
  }
  else
  {
    return '  No License requested';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  let licenseArr = ['mit','apache-2.0','lgpl-3.0','bsd-3-clause','unlicense'];
  if(license !== 'None')
  {
    if(license === 'MIT')
    {
      return `[GitHub MIT Link license](https://choosealicense.com/licenses/${licenseArr[0]})`;
    }
    if(license === 'APACHE 2.0')
    {
      return `[GitHub APACHE 2.0 Link license](https://choosealicense.com/licenses/${licenseArr[1]})`;
    }
    if(license === 'GPL 3.0')
    {
      return `[GitHub GPL 3.0 Link license](https://choosealicense.com/licenses/${licenseArr[2]})`;
    }
    if(license === 'BSD 3')
    {
      return `[GitHub BSD 3 Link license](https://choosealicense.com/licenses/${licenseArr[3]})`;
    }
    
  }
  else{
    return `[GitHub Unlicense Link license](https://choosealicense.com/licenses/${licenseArr[4]})`;
  }
   
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if(license !== 'None')
  {
    return `# License
    This project is licensed under the ${license} license.`;
  }
  else
  {
    return `# License
    This project is NOT licensed.`;
  }
}

function splitLicense(license)
{
  return license.split(' ');
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('data from markdown', data);
  return `# ${data.projectName}

  # Description
    ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  To install necessary dependencies, run the following command:
    ${data.dependencies}
  
  # Usage
    ${data.knowledgeAboutRepo}
  
  
  ${renderLicenseSection(data.license)}

  # License Badge
  ${renderLicenseBadge(data.license)}

  # Link to License
  ${renderLicenseLink(data.license)}

  # Contributing
    ${data.contribute}

  # Testing
  To run tests, run the following command:
    ${data.test}

  # Questions
  Please send email to ${data.email} for any questions on this project. Here is a link to my Repo(https://github.com/${data.github}/)
  
  `;
  
}

module.exports = generateMarkdown;

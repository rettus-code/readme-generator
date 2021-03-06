// function to generate markdown for README
function generateMarkdown(data) {
        let markdown = `# ${data.title}
        |      Table of Contents:       |
        |-------------------------------|
        | [Install](#install) |
        |        [Usage](#usage)        |
        | [Contributing](#contributing) |
        |     [Tests](#tests)           |
        |    [Questions](#questions)    |
        |    [Credits](#credits)        |
        |     [License](#license)       |
        
        ## Description
        \n ${data.desc}
        
        ## Install
        \n ${data.install}
        
        ## Usage 
        \n
        ${data.usage}

        ## Contributing:\n
         ${data.participants}  
        
        ## Tests:
        Command for running tests for this app:
        \n ${data.test}
        
        ## Questions:
        [${data.github}'s Github](https://github.com/${data.github}/)
        
        ## Credits:
         Collaborating Credits:
        \n ${data.participants}
        
        ## License information:
        \n 
        ${data.license}
        [https://choosealicense.com/](https://choosealicense.com/)
        

         &#x1F981; ${data.github} &#x1F981; 
        `
        return markdown;
      }
      
      module.exports = generateMarkdown;
      
      
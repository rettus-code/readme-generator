
const fs = require("fs");
var inquirer = require("inquirer");
var markDown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "Title of your application"
},
{
    type: "input",
    name: "tableOfContent",
    message: "Provide your table of content"
},
{
    type: "input",
    name: "installation",
    message: "How do you install"
},
{
    type: "input",
    name: "usage",
    message: "How does application work?"
},
{
    type: "list",
    name: "Licence",
    message: "What is your licence number",
    choices: [
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
        "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)",
    ]
},
{
    type: "input",
    name: "Contribution",
    message: "Who participated on this project?"
},
{
    type: "input",
    name: "Licence",
    message: "Your license nubmer"
},
{
    type: "input",
    name: "test",
    message: "Run a test?"
},
{
    type: "input",
    name: "question",
    message: "Do you have any questions?"
},
];
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    });
}
function init() {
    inquirer.prompt(questions).then(data => {
        var filename = data.title.toLowerCase().split(' ').join('') + ".md";
        console.log(data)
        writeToFile(filename, markDown(data));
    });
}
init();

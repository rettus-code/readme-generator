
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
    name: "desc",
    message: "Describe yor project"
},
{
    type: "input",
    name: "install",
    message: "How do you want to install"
},
{
    type: "input",
    name: "usage",
    message: "How does this application work?"
},
{
    type: "input",
    name: "participants",
    message: "Who participated on this project?"
},
{
    type: "input",
    name: "test",
    message: "Run a test?"
},
{
    type: "input",
    name: "github",
    message: "Do you have any questions?"
},
{
    type: "list",
    name: "license",
    message: "What is your licence number",
    choices: [
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
        "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)",
    ]
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

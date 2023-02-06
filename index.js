const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

/* consider that user will be prompted intial questions, then presented with 2 other sets of questions if option selected */

// create an array of questions that will be prompted by inquirer

const managerPrompts = [

    {
      type: "input",
      name: "name",
      message: "Please enter Team manager's name",
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter Team manager's employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Team manager's email address",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter Team manager's office number",
    },

  ];
  
/* questions asked if engineer option selected */

  const EngineerPrompts = [

    {
      type: "input",
      name: "name",
      message: "Please enter engineer's name",
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter engineer's ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter engineer's email",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter engineer's GitHub username",
    },

  ];
  
  /* questions asked if Intern option selected */

  const InternPrompts = [

    {
      type: "input",
      name: "name",
      message: "Please enter intern's name",
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter intern's ID",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter intern's email",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter intern's school",
    },

  ];

// create an empty array to push in employee objects

let employeeObjects = [];

//create function to prompt questions for manager input

function managerPrompt() {
    inquirer
      .prompt([...managerPrompts])
      .then(response => {
        
        //create new instance of manager object using class
        let manager = new Manager(

          response.name,
          response.employeeID,
          response.email,
          response.officeNumber
          
        );
  
        //push response into empty employee array
        employeeObjects.push(manager);
        // console.log(employeeObjects); 

      })
      .catch(err => {

        throw new Error(`Error message : ${err.message}`);

      });

  }
  
  managerPrompt();
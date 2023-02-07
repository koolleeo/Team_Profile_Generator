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

  //create a function that validates that user input contains no numbers or special characters

  const validateNoNumbersSpecialChar = async (input) => {
    if (!/^[a-zA-Z -]*$/.test(input)) {
       return 'You cannot use Numbers or special characters';
    }
    return true;
  };
  
  //create a function that validates that user input contains no special characters

  const validateNoSpecialChar = async (input) => {
    if (!/^[a-zA-Z0-9 -]*$/.test(input)) {
       return 'You cannot use special characters';
    }
    return true;
  };
  
  //create a function that validates that user enters a valid email format
  
  const validateEmail = async (email) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
       return 'Please enter a valid email address';
    }
    return true;
  };
  
//create a function that validates that user input contains numbers or spaces only

  const validateNumbersOnly = async (number) => {
    if (!/^[0-9 ]+$/.test(number)) {
       return 'Please use numbers only';
    } 
      return true;
    
  };

/* consider that user will be prompted intial questions, then presented with 2 other sets of questions if option selected */

// create an array of questions that will be prompted by inquirer

const managerPrompts = [

    {
      type: "input",
      name: "name",
      message: "Please enter Team manager's name",
      validate: validateNoNumbersSpecialChar,
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter Team manager's employee ID",
      validate: validateNoSpecialChar,
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Team manager's email address",
      validate: validateEmail,
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter Team manager's office number",
      validate: validateNumbersOnly,
    },

  ];
  
/* questions asked if engineer option selected */

  const EngineerPrompts = [

    {
      type: "input",
      name: "name",
      message: "Please enter engineer's name",
      validate: validateNoNumbersSpecialChar,
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter engineer's ID",
      validate: validateNoSpecialChar,
    },
    {
      type: "input",
      name: "email",
      message: "Please enter engineer's email",
      validate: validateEmail,
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
      validate: validateNoNumbersSpecialChar,
    },
    {
      type: "input",
      name: "employeeID",
      message: "Please enter intern's ID",
      validate: validateNoSpecialChar,
    },
    {
      type: "input",
      name: "email",
      message: "Please enter intern's email",
      validate: validateEmail,
    },
    {
      type: "input",
      name: "school",
      message: "Please enter intern's school",
      validate: validateNoNumbersSpecialChar,
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
  
        //push response into empty employee array /* always first instance */
        employeeObjects.push(manager);

        inputOption();

      })
      .catch(err => {

        //throw new error and print to console.log
        throw new Error(`Error message : ${err.message}`);

      });

  }
  

  //create function to prompt questions for engineer input

  function engineerPrompt() {
    inquirer
        .prompt([...EngineerPrompts])
        .then(response => {

    //create new instance of engineer object using class
      let engineer = new Engineer(

        response.name,
        response.employeeID,
        response.email,
        response.github

      );

      //push response into employee array
      employeeObjects.push(engineer);

      inputOption();

    }).catch(err => {

        //throw new error and print to console.log
        throw new Error(`Error message : ${err.message}`);

    });
  }


 //create function to prompt questions for Intern input

  function internPrompt() {
    inquirer
        .prompt([...InternPrompts])
        .then(response => {

    //create new instance of intern object using class
      const intern = new Intern(

        response.name,
        response.employeeID,
        response.email,
        response.school

      );

      //push response into employee array
      employeeObjects.push(intern);

      inputOption();
  
    }).catch(err => {

        //throw new error and print to console.log
        throw new Error(`Error message : ${err.message}`);

    });
  }

//create function to prompt for user input, then call function or exit

function inputOption() {

    inquirer
      .prompt([
        {
          type: "list",
          name: "option",
          message: "Type of employee you wish to add?",
          choices: ["Add an engineer", "Add an intern", "Finish building the team"],
        },
      ])
      .then(response => {

        //create switch statement to call function based on user selection

        switch(response.option){
            case "Add an engineer":
                engineerPrompt();
                break;
            case "Add an intern":
                internPrompt();
                break;
            case "Finish building the team":
                buildTeam();
                break;
                default:
                    throw new Error('selection undefined - review inputOption');
        }

      });
  }

// function to generate HTML output file - provided as starter code

function buildTeam() {

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employeeObjects), "utf-8");
  }

// initialise function to start application

managerPrompt();
  


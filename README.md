![License](https://img.shields.io/badge/License-mit-brightgreen.svg)

# Team Profile Generator

## Table of Contents

>[Description](#description)\
>[Installation](#installation)\
>[Usage](#usage)\
>[License](#license)\
>[Contributing](#contributing)\
>[Tests](#tests)\
>[Questions](#questions)\

## Description

Use node.js and the appropriate npm modules to create a Team Profile Generator which meets the following technical specification

### User Story

As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

### Acceptance Criteria

Create a command-line application that accepts accepts user input using the provided starter code.

Create classes for each team member provided and export them. The tests for these classes (in the _tests_ directory) must ALL pass.

The first class is an Employee parent class with the following properties and methods:

* name
* id
* email
* getName()
* getId()
* getEmail()

* getRole()—returns 'Employee'


The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have the following:

* officeNumber

* getRole()—overridden to return 'Manager'


In addition to Employee's properties and methods, Engineer will also have the following:


* github—GitHub username
* getGithub()

* getRole()—overridden to return 'Engineer'


In addition to Employee's properties and methods, Intern will also have the following:

* school
* getSchool()

* getRole()—overridden to return 'Intern'

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

Write code in index.js that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

When a user starts the application then they are prompted to enter the team manager’s:

* Name
* Employee ID
* Email address
* Office number


When a user enters those requirements then the user is presented with a menu with the option to:

* Add an engineer
* Add an intern
* Finish building the team


When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:

* Engineer's Name
* ID
* Email
* GitHub username


When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:

* Intern’s name
* ID
* Email
* School


When a user decides to finish building their team then they exit the application, and the HTML is generated.

Call the render function (provided for you) and pass in an array containing all employee objects;

The render function will generate and return a block of HTML including templated divs for each employee!

Create an HTML file using the HTML returned from the render function.

Write it to a file named team.html in the output folder.

You can use the provided variable outputPath to target this location.

## Installation
Steps that should be taken to install your project. 

1. clone repository
2. cd into folder using terminal on vscode
3. ensure node.js is install - then type npm install (to install dependencies as detailed on the package.json)
4. using node.js and the file index.js as an entry point, type node index, and follow the question prompts
5. file should then be output in the specified file directory

## Usage

To be used for educational purposes only

## License

This project uses the following license : MIT

## Contributing

This is curently a read only project

Used https://shields.io/ to create license badges

## Tests

## Questions?

Contact me by email.

[Contact Me](mailto:leigh.ally@gmail.com)

Visit my GitHub page.

[GitHub page](https://github.com/koolleeo/)

## Mock up of HTML output file

![12-object-oriented-programming-challenge-demo](https://user-images.githubusercontent.com/86853558/217317184-1926e605-6113-4132-9709-e56191f85e90.png)
  
  

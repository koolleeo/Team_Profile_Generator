// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(name, id, email, github) {

    //inherited properties from Employee
    super(name, id, email);

    this.github = github;

  }

  //method to get Github
  getGithub() {
    return this.github;
  }

/*
    If a child class has the same method or property name as that of the parent class, 
    it will use the method and property of the child class (method overriding).
 */

    //overriding Employee getRole method
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

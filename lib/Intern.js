// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
	
class Intern extends Employee {

  constructor(name, id, email, school) {

    //inherited properties from Employee
    super(name, id, email);

    this.school = school;

  }

  //method to get Employee's school (intern)
  getSchool() {
    return this.school;
  }

  //overriding Employee getRole method
  getRole() {
    return "Intern";
  }
  
}

module.exports = Intern;

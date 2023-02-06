// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");
class Manager extends Employee {

  constructor(name, id, email, officeNumber) {

    //inherited properties from Employee
    super(name, id, email);

    this.officeNumber = officeNumber;

  }

  //method to get office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  //overriding Employee getRole method
  getRole() {
    return "Manager";
  }

}

module.exports = Manager;

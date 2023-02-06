// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;

    }
  
    //method to get employee name
    getName() {
      return this.name;
    }

    //method to get employee id
    getId() {
      return this.id;
    }

    //method to get employee email
    getEmail() {
      return this.email;
    }

    //method to get employee Role - defined as 'employee'
    getRole() {
      return "Employee";
    }

  }
  
  module.exports = Employee;


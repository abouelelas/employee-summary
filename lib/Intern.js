// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');
// * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'
class Intern extends Employee{
    constructor(name, id, email,school) {
       super (name,id,email);
        this.school = school;

       
    }
// methods that return the value of properties
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
        // * getRole() // Overridden to return 'Manager'
      
    }
}


module.exports = Intern;

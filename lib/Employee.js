// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// methods that return the value of properties
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;



// let newEmployee = new Employee("John Doe","1234","jdoe@gmail.com");
// newEmployee.getName();
// newEmployee.getId();
// newEmployee.getEmail();
// newEmployee.getRole();


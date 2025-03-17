const Employee = require("./employee")


class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = []

    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    _totalSubSalary(employees = this.employees) {
        let sum = 0

        if(employees.length === 0)
            return sum

        let employee = employees[0]
        let restOfem = employees.slice(1)

        if(employee instanceof Manager){
            let res = employee.salary + this._totalSubSalary(employee.employees)
            sum += res
        } else {
            sum += employee.salary
        }

        return sum + this._totalSubSalary(restOfem)
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier
    }

}


module.exports = Manager
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(code, name, gender, annualSalary, dateOfBrith) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBrith = dateOfBrith;
    }
    Employee.prototype.computeMontlySalary = function (annualSalary) {
        return annualSalary / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map
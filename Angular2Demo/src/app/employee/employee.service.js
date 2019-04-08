"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return [
            { code: 'exp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBrith: '2/25/1988' },
            { code: 'exp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBrith: '6/6/1988' },
            { code: 'exp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBrith: '8/16/1988' },
            { code: 'exp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBrith: '5/5/1988' },
            { code: 'exp105', name: 'nancy', gender: 'Female', annualSalary: 6700.826, dateOfBrith: '5/6/1988' },
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map
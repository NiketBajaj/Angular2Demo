export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBrith: string;

    //department?: string;
    //computeMontlySalary(annualSalary: number): number;
}


export class Employee implements IEmployee {
    constructor(public code: string, public name: string, public gender: string,
        public annualSalary: number, public dateOfBrith: string) {

    }

    computeMontlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
}
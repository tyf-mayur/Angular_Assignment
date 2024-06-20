

export enum Department {
    Development = "Development",
    QA = "QA",
    HR = "HR",
    Manager = "Manager"
}

export type Authority = 'Admin'|'User';

export const Defaultpassword : string = "AdminLogin";

export type EmployeeTuple = [number, string, string, Department, string, Authority];

export type Credentials = {
    username: string;
    password: string;
};
  


export class Employee {
    // Public members
    public empID: number;
    public name: string;
    public email: string;
    public department: Department;
    public address: string;
    public authority: Authority = 'User';

    constructor(emp:EmployeeTuple) {
        const [empID, name, email, department, address, authority] = emp;
        this.empID = empID;
        this.name = name;
        this.email = email;
        this.department = department;
        this.address = address;
        this.authority = authority;
    }
}





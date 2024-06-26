
import { Injectable } from '@angular/core';
import {
  Department,
  Authority,
  Employee,
  EmployeeTuple,
} from '../app-customs.models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  constructor() {}

  private employeesList: Employee[] = [];

  saveEmployeesToLocalStorage(): void {
    // localStorage.removeItem('storedEmployeeList');
    // localStorage.setItem('storedEmployeeList', JSON.stringify(this.employeesList));

    localStorage.setItem('CheckerList', JSON.stringify(this.employeesList));
  }

  loadEmployeesFromLocalStorage(): Employee[]  {
    //const storedEmployees = localStorage.getItem('storedEmployeeList');
    const storedEmployees = localStorage.getItem('CheckerList');
    if (storedEmployees) {
      this.employeesList = JSON.parse(storedEmployees);
      return this.employeesList;
    }
    return [];
  }

  addEmployee(emp: EmployeeTuple): boolean {
    const [empID, name, email, department, address, authority] = emp;
    const employee = this.employeesList.find((emp) => emp.empID === empID);
    if (employee) {
      alert(
        'This EmployeeID Already Exists, Do you Want to update the Details Instead'
      );
      return false;
    }

    const newEmployee: Employee = {
      empID,
      name,
      email,
      department,
      address,
      authority,
    };
    this.employeesList.push(newEmployee);
    this.saveEmployeesToLocalStorage();
    this.loadEmployeesFromLocalStorage();
    return true;
  }

  updateEmployee(updatedEmployeeTuple: EmployeeTuple): boolean {
    const [empID, name, email, department, address, authority] =
    updatedEmployeeTuple;
    const index = this.employeesList.findIndex((emp) => emp.empID === empID);
    if (index === -1) {
        alert("Employee ID does not exists to Update the Data")
        return false;
    }
    var updatedEmployee: Employee = {
      empID,
      name,
      email,
      department,
      address,
      authority,
    };

    this.employeesList[index] = updatedEmployee;
    console.log(this.employeesList);
    this.saveEmployeesToLocalStorage();
    this.loadEmployeesFromLocalStorage();

    return true;
  }

}

var CheckerEmployeeList: Employee[] = [];
var emp: Employee;
let newEmployeeTuple: EmployeeTuple = [
  1,
  'John Doe',
  'John.Doe@gmail.com',
  Department.Development,
  '17 Rose Villa',
  'Admin',
];
const [empID, name, email, department, address, authority] = newEmployeeTuple;

const newEmployee: Employee = {
  empID,
  name,
  email,
  department,
  address,
  authority,
};
CheckerEmployeeList.push(newEmployee);
localStorage.setItem('EmployeeByID', JSON.stringify(newEmployee));


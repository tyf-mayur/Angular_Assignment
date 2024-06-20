import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authority, Department, EmployeeTuple } from 'src/app/app-customs.models';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit{

  constructor(private employeeDataService:EmployeeDataService, private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('StoredLoginData')){
      this.router.navigateByUrl("/login");
    }
  }
  Submit():void{
    //Add the details to the employee List
      const empID = parseInt((document.getElementById("empID") as HTMLInputElement).value);
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("empEmail") as HTMLInputElement).value;
      const department = (document.getElementById("department") as HTMLSelectElement).value as Department;
      const address = (document.getElementById("address") as HTMLInputElement).value;
      const authority = (document.getElementById("Authority") as HTMLInputElement).value as Authority;
      let employeeTuple:EmployeeTuple = [empID, name, email, department, address, authority];
      if(this.employeeDataService.addEmployee(employeeTuple)){
        alert("Employee Added Suceessfully....");
      };
      this.router.navigateByUrl("/user");
  }

}

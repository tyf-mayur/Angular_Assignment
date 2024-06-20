import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Authority,
  Department,
  EmployeeTuple,
} from 'src/app/app-customs.models';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent implements OnInit {
  empID: number = 1;

  constructor(
    private route: ActivatedRoute,
    private employeeDataService: EmployeeDataService,
    private router: Router
  ) {}

  ngOnInit() {
    if(!localStorage.getItem('StoredLoginData')){
      this.router.navigateByUrl("/login");
    }
    this.empID = JSON.parse(this.route.snapshot.paramMap.get('id') as string);
  }

  Update() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('empEmail') as HTMLInputElement).value;
    const department = (
      document.getElementById('department') as HTMLSelectElement
    ).value as Department;
    const address = (document.getElementById('address') as HTMLInputElement)
      .value;
    const authority = (document.getElementById('Authority') as HTMLInputElement)
      .value as Authority;

    let employeeTuple: EmployeeTuple = [
      this.empID,
      name,
      email,
      department,
      address,
      authority,
    ];
    console.log(employeeTuple);
    if (this.employeeDataService.updateEmployee(employeeTuple)) {
      alert('Employee Updated Suceessfully....');
    }
    this.router.navigateByUrl('/user');
  }
}

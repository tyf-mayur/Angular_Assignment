import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { Employee, EmployeeTuple , Department} from 'src/app/app-customs.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    private employeeDataService: EmployeeDataService,
    private router: Router,
  ) {}
  StoredEmployeeList: Employee[] = [];
  ngOnInit(): void {
    if(!localStorage.getItem('StoredLoginData')){
      this.router.navigateByUrl("/login");
    }
    this.Refresh();
    
  }

  Refresh():void{
    this.StoredEmployeeList =
    this.employeeDataService.loadEmployeesFromLocalStorage() || [];
  }
  
  viewEmployeeDetails(empID: Number): void {
    alert(`Viewing details for employee ID: ${empID}`);
    let employee = this.StoredEmployeeList.find(emp => emp.empID === empID);
    localStorage.removeItem('EmployeeByID');
    localStorage.setItem('EmployeeByID', JSON.stringify(employee));
    this.router.navigateByUrl(`view-employee/${empID}`);
  }

  Reroute() {
    alert('Routing to Add Employee Form');
    this.router.navigateByUrl('/add-employee');
  }

}

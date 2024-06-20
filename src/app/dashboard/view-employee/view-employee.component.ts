import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/app-customs.models';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent  implements OnInit {
  empId:number = 1;
  stringEmployeeData : string = '';
  employeeDetails!:Employee ;
  constructor(private employeeDataService:EmployeeDataService, private router:Router, private route:ActivatedRoute) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

    this.stringEmployeeData = localStorage.getItem('EmployeeByID') as string;
    this.employeeDetails =  JSON.parse(this.stringEmployeeData);
    this.empId = JSON.parse(this.route.snapshot.paramMap.get('id') as string);
  }

  RouteToUpdate(){
    alert("Change Route to go on update Form");
    this.router.navigateByUrl(`/update-employee/${this.empId}`);
  }

  RouteToDashboard(){
    alert("Change Route to go on Dashboard");
    this.router.navigateByUrl('/user');
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UserComponent } from './user/user.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
  declarations: [LogoutComponent, AddEmployeeComponent, UserComponent, ViewEmployeeComponent, UpdateEmployeeComponent],
  imports: [
    CommonModule, FormsModule,  RouterModule
  ],
  exports:[LogoutComponent, AddEmployeeComponent, UserComponent, ViewEmployeeComponent, UpdateEmployeeComponent]
})
export class DashboardModule { }

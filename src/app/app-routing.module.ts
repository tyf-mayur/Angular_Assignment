import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { AddEmployeeComponent } from './dashboard/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './dashboard/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';
import { AppComponent } from './app.component';
import { UserComponent } from './dashboard/user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'view-employee/:id',
    component: ViewEmployeeComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },
  {
    path: 'update-employee/:id',
    component: UpdateEmployeeComponent
  },
  {
    path:'**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

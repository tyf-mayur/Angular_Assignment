import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { AddEmployeeComponent } from './dashboard/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './dashboard/view-employee/view-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'user',
    component:AddEmployeeComponent
  },
  {
    path: 'view-employee/:id',
    component: ViewEmployeeComponent
  },
  {
    path: 'add-employee',
    component:AddEmployeeComponent
  },
  {
    path: 'update-employee/:id',
    component:UpdateEmployeeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent{

  constructor(private router: Router) { }


  logout(){
    localStorage.removeItem('StoredLoginData');
    alert("Logout Sucessfull");
    this.router.navigateByUrl("/login");
  }

}

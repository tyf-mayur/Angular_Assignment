import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/app-customs.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  username: string = '';
  password: string = '';
  showModal: boolean = false;

  //Default Password
  readonly defaultPass = 'UserLogin';

  constructor(private router : Router) { }

  // ngOnInit(): void {
  //   // if(localStorage.getItem('StoredLoginData')){
  //   //   this.check = true;
  //   // }else{
  //   //   this.route.navigateByUrl("/user");
  //   // }
  // }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  login(): void {
      if(this.password == this.defaultPass){
        var userCredentials: Credentials = {
          username: this.username,
          password: this.password
        };

        localStorage.setItem('StoredLoginData', JSON.stringify(userCredentials));
        alert('Login successful');
        this.closeModal();
        this.router.navigateByUrl("/user")
      }else{
        alert('Invalid credentials');
        this.closeModal();
        this.router.navigateByUrl("/login");
      }
  }
}

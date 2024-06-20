import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/app-customs.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{


  username: string = '';
  password: string = '';
  showModal: boolean = false;

  //Default Password
  readonly defaultPass = 'UserLogin';


  constructor(private route : Router) { }


  check = true;
  ngOnInit(): void {
    if(localStorage.getItem('StoredLoginData')){
      this.check = true;
    }else{
      this.route.navigateByUrl("/dashboard");
    }
  }


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
        this.route.navigateByUrl("/dashboard")
        this.route.navigateByUrl("/dashboard");
      }else{
        alert('Invalid credentials');
      }
  }
}

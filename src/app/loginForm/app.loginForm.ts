import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-LoginForm',
  templateUrl: './app.loginForm.html',
  styleUrls: ['./app.loginForm.css']
})

export class loginFormComponent implements OnInit {

  ngOnInit(){}

  constructor(private router : Router){
  }

  loginUser(e){
    e.PreventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username=="admin" && password== "admin"){
      this.router.navigate(['warriors']);
    }
    return false;
  }
}

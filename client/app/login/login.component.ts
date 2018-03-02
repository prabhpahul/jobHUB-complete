import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import{SidebarComponent} from './../sidebar/sidebar.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
title = 'Look jQuery Animation working in action!';
  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private user: UserService
              ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });

  }

 login(){
 	console.log(this.loginForm.value);
  this.user.register(this.loginForm.value).subscribe(
      res => this.router.navigate(['/login']),
      error => console.log('error')
    );
	};


}

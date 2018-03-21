import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import{SidebarComponent} from './../sidebar/sidebar.component';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthService } from '../services/auth.service';
import { ToasterComponent } from '../toaster/toaster.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  

  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
 error:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private user: UserService,
              public dialogRef: MatDialogRef<LoginComponent>,
              public auth: AuthService,
              public toaster: ToasterComponent
              
              ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
    
  }

login() {
    this.auth.login();
     this.toaster.setMessage('Logged In successfully.', 'success');

  }
  loginUser(){
   this.auth.loginUserEmail(this.loginForm.value.email,this.loginForm.value.password);
   this.toaster.setMessage('Logged In successfully.', 'success');
  }

}

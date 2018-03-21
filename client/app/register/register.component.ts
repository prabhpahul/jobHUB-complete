import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import{SidebarComponent} from './../sidebar/sidebar.component';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  registerForm: FormGroup;
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
              public dialogRef: MatDialogRef<RegisterComponent>,
              public auth: AuthService
              
              ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
    
  }

  registerUser(){
   this.auth.registerUserEmail(this.registerForm.value.email,this.registerForm.value.password);
  }
}

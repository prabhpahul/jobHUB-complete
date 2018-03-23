import {Component,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{LoginComponent} from '../login/login.component';
import{RegisterComponent} from '../register/register.component';
import{EmployersComponent} from '../employers/employers.component';
import{FeedbackComponent} from '../feedback/feedback.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent
{

 industry: String;
 salary:String;
 city:String;
 showLogin:boolean;
 

 constructor(public dialog: MatDialog,
 private router: Router,
  public auth: AuthService,
  @Inject(LOCAL_STORAGE) private storage: WebStorageService
 ){
  this.showLogin = true;
 }

     
    industries = [
        {value: 'Accounts', viewValue: 'Accounting and Finance'},
        {value: 'Administrative', viewValue: 'Administrative '},
        {value: 'Arts', viewValue: 'Arts, Media and Entertainment'},
        {value: 'customerService', viewValue: 'Customer Service'},
       ];

    salaries= [
            {value: '50000', viewValue: '40k-50k'},
            {value: '60000', viewValue: '50k-60k'},
            {value: '70000', viewValue: '60k-70k'},
            {value: '80000', viewValue: '70k-80k'},
            {value: '90000', viewValue: '90k-100k'},
            {value: '100000', viewValue: '100k-110k'},
            {value: '110000', viewValue: '110k-120k'},
            {value: '120000', viewValue: '120k-130k'},
            {value: '130000', viewValue: '130k-140k'},
            {value: '140000', viewValue: '140k-150k'},
            {value: '150000', viewValue: '150k-160k'}
            
          ];

    locations = [
      {value: 'Toronto', viewValue: 'Toronto'},
      {value: 'Vancouver', viewValue: 'Vancouver'},
      {value: 'Montreal', viewValue: 'Montreal'},
      {value: 'Calgary', viewValue: 'Calgary'},
      {value: 'Edmonton', viewValue: 'Edmonton'},
      {value: 'Ottawa', viewValue: 'Ottawa'},
      {value: 'Windsor', viewValue: 'Windsor'},
      {value: 'Winnipeg', viewValue: 'Montreal'},
    ];
        openDialog(): void {
        let dialogRef = this.dialog.open(LoginComponent, {
          width: '500px',
          height: '500px',
          data: { }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      
    });
  }
  openDialogRegister():void{
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px',
      height: '500px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  openDialogEmployer():void{
    let dialogRef = this.dialog.open(EmployersComponent, {
      width: '500px',
      height: '500px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
   openDialogFeedback():void{
    let dialogRef = this.dialog.open(FeedbackComponent, {
      width: '700px',
      height: '800px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  search(){
    console.log(this.city,this.industry,this.salary);
    this.storage.set('city', this.city);
    this.storage.set('industry', this.industry);
    this.storage.set('salary', this.salary);
     this.router.navigate(['/list', this.industry,this.salary,this.city]);
  }
  logout() {
     this.auth.logout();
  }

}



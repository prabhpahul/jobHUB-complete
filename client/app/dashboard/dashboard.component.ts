import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{LoginComponent} from '../login/login.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent
{

 industry: String;
 role:String;
 city:String;
 showLogin:boolean;
 constructor(public dialog: MatDialog,
 private router: Router,
  public afAuth: AngularFireAuth
 ){
  this.showLogin = true;
 }
foods = [
    {value: 'Accounting and Finance', viewValue: 'Accounting and Finance'},
    {value: 'Administrative and Clerical', viewValue: 'Administrative and Clerical'},
    {value: 'Arts, Media and Entertainment', viewValue: 'Arts, Media and Entertainment'},
    {value: 'Customer Service', viewValue: 'Customer Service'},
    {value: 'Engineering', viewValue: 'Engineering'},
    {value: 'Environmental', viewValue: 'Environmental'},
    {value: 'Financial Services', viewValue: 'Financial Services'},
    {value: 'Healthcare Services and Wellness', viewValue: 'Healthcare Services and Wellness'},
    {value: 'Insurance', viewValue: 'Insurance'},
    {value: 'Legal', viewValue: 'Legal'},
    {value: 'Manufacturing', viewValue: 'Manufacturing'},
    {value: 'Sales and Business Development', viewValue: 'Sales and Business Development'},
    {value: 'Science and research', viewValue: 'Science and research'},
    {value: 'Technology and Digital Media', viewValue: 'Technology and Digital Media'},
    {value: 'Training and Education', viewValue: 'Training and Education'}
                ];

roles = [
        {value: 'Accounting Anaylst', viewValue: 'Accounting Anaylst'},
        {value: 'Assistant Accounting Manager', viewValue: 'Assistant Accounting Manager'},
        {value: 'Administrative Assistant', viewValue: 'Culture and leisure'},
        {value: 'Administrative Clerk', viewValue: 'Administrative Clerk'},
        {value: 'Administration Manager', viewValue: 'Administration Manager'},
        {value: 'Graphic Arts Technician', viewValue: 'Graphic Arts Technician'},
        {value: 'Customer Service Agent', viewValue: 'Customer Service Agent'},
        {value: 'Customer Service Analyst', viewValue: 'Customer Service Analyst'},
        {value: 'Engineering Technologist', viewValue: 'Engineering Technologist'},
        {value: 'Engineering Analyst', viewValue: 'Engineering Anaylst'},
        {value: 'Data Scientist', viewValue: 'Data Scientist'},
        {value: 'Environmental Scientist', viewValue: 'Environmental Scientist'},
        {value: 'Technology Architect', viewValue: 'Technology Architect'},
        {value: 'Technology Lead', viewValue: 'Technology Lead'},
        {value: 'Training Consultant', viewValue: 'Training Consultant'}
          ];

locations = [
  {value: 'Toronto', viewValue: 'Toronto'},
  {value: 'Vancouver', viewValue: 'Vancouver'},
  {value: 'Montreal', viewValue: 'Montreal'},
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

  search(){
    console.log(this.city,this.industry,this.role);
     this.router.navigate(['/list', this.industry,this.role,this.city]);
  }
  logout() {
     this.afAuth.auth.signOut();
  }

}



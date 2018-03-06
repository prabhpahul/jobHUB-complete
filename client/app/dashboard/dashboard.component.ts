import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{LoginComponent} from '../login/login.component';

@Component({
  selector: 'menu-overview-example',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent
{

 constructor(public dialog: MatDialog,
 ){}
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
  {value: 'Barrie', viewValue: 'Barrie'},
  {value: 'Brampton', viewValue: 'Brampton'},
  {value: 'Burlington', viewValue: 'Burlington'},
  {value: 'Cambridge', viewValue: 'Cambridge'},
  {value: 'Guelph', viewValue: 'Guelph'},
  {value: 'Hamilton', viewValue: 'Hamilton'},
  {value: 'Kitchener', viewValue: 'Kitchener'},
  {value: 'London', viewValue: 'London'},
  {value: 'North York', viewValue: 'North York'},
  {value: 'Mississauga', viewValue: 'Mississauga'},
  {value: 'Ottawa', viewValue: 'Ottawa'},
  {value: 'Scarborough', viewValue: 'Scarborough'},
  {value: 'Toronto', viewValue: 'Toronto'},
  {value: 'Vaughan', viewValue: 'Vaughan'},
  {value: 'Waterloo', viewValue: 'Waterloo'},


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

}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

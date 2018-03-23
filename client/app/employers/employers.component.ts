import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, FormGroupDirective, NgForm,FormArray, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ToasterComponent } from '../toaster/toaster.component';
import { Observable } from 'rxjs/Observable';
import {MatDialog,MatDialogModule, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(
  		  public dialogRef: MatDialogRef<EmployersComponent>,
		  public db: AngularFireDatabase,
	  	  private formBuilder: FormBuilder,
	  	  public toast : ToasterComponent) { }

   employeeForm: FormGroup;

  companyName = new FormControl('', [
    Validators.required,
    
  ]);
industries = [
        {value: 'Accounts', viewValue: 'Accounting and Finance'},
        {value: 'Administrative', viewValue: 'Administrative '},
        {value: 'Arts', viewValue: 'Arts, Media and Entertainment'},
        {value: 'customerService', viewValue: 'Customer Service'},
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

   email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
  ]);
  contact = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10)
  ]);
  salary = new FormControl('', [
    Validators.required,
  ]);
  doc = new FormControl('', [
    Validators.required
  ]);

 role = new FormControl('', [
    Validators.required,
  ]);

 industry = new FormControl('', [
    Validators.required,
  ]);
  experience = new FormControl('', [
    Validators.required,
  ]);
  ngOnInit() {

  	this.employeeForm = this.formBuilder.group({
      companyName:this.companyName,
      contact:this.contact,
      email: this.email,
      doc:this.doc,
      role:this.role,
      salary:this.salary,
      industry: this.industry,
      experience:this.experience,
     address:this.initAddress()
    });
}

initAddress(){
    return this.formBuilder.group({
      address_1: ['', Validators.required],
            city:['', Validators.required],
            province:['', Validators.required],
            zip: ['', Validators.required]
        });
  }
addEmployee(){
  	console.log(this.employeeForm.value);
  	const itemsRef = this.db.list('/jobs/'+this.employeeForm.value.industry);
    itemsRef.push({ Company: this.employeeForm.value.companyName, Contact: this.employeeForm.value.email, Country:'Canada',
    Created: this.employeeForm.value.doc, Industry: this.employeeForm.value.industry,Experience: this.employeeForm.value.experience, Salary : this.employeeForm.value.salary,
    Title:this.employeeForm.value.role,city:this.employeeForm.value.address.city});
     this.toast.setMessage('Employee Added successfully.', 'success');
     this.employeeForm.reset(); 
  }

}

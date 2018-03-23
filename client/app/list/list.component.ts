import { Component,ViewChild, OnInit,AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AngularFireDatabase,AngularFireList, AngularFireAction } from 'angularfire2/database';
import {Job} from '../shared/models/jobs';
import { Observable } from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    start: boolean = false;
    industry: string;
    salary: number;
    city:string;
    @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    jobs: Observable<any[]>;
    jobList:any[] =[];
    selectedCity:any;
    companyCity:any;
    displayedColumns = ['index', 'company', 'title','salary', 'contact','phone','experience','city','country','click'];
    dataSource = new MatTableDataSource<Job>();
    jobRef: AngularFireList<any>;
    jobs$: Observable<any[]>;
    cityRef: AngularFireList<any>;
    city$: Observable<any[]>;
    satisfactionScore:number;
    @ViewChild('eventModal') eventModal;


    constructor(public db: AngularFireDatabase,
    private route: ActivatedRoute,public snackBar: MatSnackBar) {
      this.route.params.subscribe( params => {
      this.industry = params.industry;
    		this.salary = params.salary;
    		this.city = params.city;
  });
     this.jobRef = db.list('/jobs/'+this.industry);
    this.jobs$ = this.jobRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, val:c.payload.val() 
    }));
   });
    this.jobs$.subscribe(data=>{
    _.forEach(data,(d)=>{
      this.jobList.push(d.val);
    })
     
      this.dataSource.data = this.jobList;
    })
    this.cityRef = db.list('/satisfaction/'+this.city);
    this.city$ = this.cityRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, val:c.payload.val() 
    }));
   });
    this.city$.subscribe(data=>{
      this.selectedCity = data;
    })
  }

    ngOnInit() {
    setTimeout(() => {
        this.snackBar.open('Login To View Analytics For Your Selection','Undo');
    }, 1000);
  }
  
    satisfaction(item){
    var expectedSalary = + this.salary;
     var count = 0;
      this.cityRef = this.db.list('/satisfaction/'+item.city);
    this.city$ = this.cityRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, val:c.payload.val() 
    }));
   });
    this.city$.subscribe(data=>{
      this.companyCity = data;
      if(this.selectedCity[0].val < this.companyCity[0].val )
        count = count + 1;
      if(this.selectedCity[1].val < this.companyCity[1].val )
        count = count + 1;
      if(this.selectedCity[1].val < this.companyCity[1].val )
        count = count + 1;   
      if(expectedSalary < item.Salary)
        count= count + 1;

        count = count + 1;
       this.satisfactionScore = count; 
      this.eventModal.nativeElement.className = 'modal fade show'; 
    })

  }
    ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
 close() {
          this.eventModal.nativeElement.className = 'modal fade hide';
    }


  applyFilter(filterValue: string) {
  console.log(this.dataSource);
  this.dataSource.filter = filterValue;  

}
}

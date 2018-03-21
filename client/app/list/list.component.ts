import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import {Job} from '../shared/models/jobs';
import { Observable } from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

      start: boolean = false;
      industry: string;
      role: string;
      city:string;
      jobs: Observable<Job[]>;
      jobList:Job[] =[];
      constructor(private route: ActivatedRoute,
      db: AngularFireDatabase) {
        this.route.params.subscribe( params => {console.log(params)
        this.industry = params.industry;
      		this.role = params.role;
      		this.city = params.city;
    });
      	this.jobs = db.list('/jobs').valueChanges();
        this.jobs.subscribe(Job=>{
          this.jobList = Job;
          console.log(this.jobList);
        })
      	console.log(this.jobs);
      }

      ngOnInit() {
      	console.log(this.industry);
      }
      satisfaction(item){

        console.log(item);
      }

    }

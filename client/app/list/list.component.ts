import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import {Job} from '../shared/models/jobs';
import { Observable } from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  constructor(private route: ActivatedRoute,
  db: AngularFireDatabase) {

  	this.route.params.subscribe( params => {console.log(params)

  		this.industry = params.industry;
  		this.role = params.role;
  		this.city = params.city;
});
  	this.jobs = db.list('jobs').valueChanges();
  	console.log(this.jobs);
   }

  ngOnInit() {
  	console.log(this.industry);
  }

}

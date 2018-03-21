import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AngularFireDatabase } from 'angularfire2/database';
import {Job} from '../shared/models/jobs';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
@Component({
  selector: 'app-job-analysis',
  templateUrl: './job-analysis.component.html',
  styleUrls: ['./job-analysis.component.css']
})
export class JobAnalysisComponent implements OnInit {

  public city:string;
  public industry:string;
  public role:string;
  jobs: Observable<Job[]>;
  jobList:Job[] =[];
  cities:any[]=[];
  data:any;
  public barLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public showBarChart:boolean = false;
  public showRoleChart:boolean = false;
  public averagesalaryChart:boolean = false;
  public barChartData:any[] = [
    {data: [], label: 'Total Jobs'}
  ];
  public salaryData:any[] = [
    {data: [], label: 'Total Salary City Wise'}
  ];

  public roleChartLabels:string[] = [];
  public roleChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  public barChartColors:Array<any> = [
    { // green
      backgroundColor: 'rgba(38, 236, 3,0.8)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#EC2303',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public salaryChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(71, 56, 249,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private db: AngularFireDatabase, @Inject(LOCAL_STORAGE) private storage: WebStorageService , ) {
   this.jobs = db.list('jobs').valueChanges();
    this.jobs.subscribe(Job=>{
    this.jobList = Job;
    this.barChart(this.jobList);
    this.roleWiseDonughtChart(this.jobList);
   
   })
   }
 
  ngOnInit() {

    this.city=this.storage.get('city');
    this.industry=this.storage.get('industry');
    this.role=this.storage.get('role');
  }
    
    barChart(jobs){

      this.data = _.groupBy(jobs,(job)=>
      {
        return job.city
      })
      console.log(this.data);
      //chart assignment starts here
      _.forEach(this.data,(key,value) => {
        console.log(key);
        let averageSalary = 0;
        _.forEach(key,(k)=>{
          averageSalary +=Number(k.Salary);
          
        })
        
        averageSalary = averageSalary/ key.length;
        console.log(averageSalary);
        this.salaryData[0].data.push(averageSalary);
        this.barLabels.push(value);
        this.barChartData[0].data.push(key.length);
              
      })
      console.log(this.barLabels);
      console.log(this.salaryData[0]);
      this.showBarChart=true;
      this.averagesalaryChart=true;
    }

    roleWiseDonughtChart(jobs){
      this.data = _.groupBy(jobs,(job)=>
      {
        return job.Title
      })
      console.log(this.data);
      //chart assignment starts here
      _.forEach(this.data,(key,value) => {
        console.log(key);
        this.roleChartLabels.push(value);
        this.roleChartData.push(key.length);
              
      })
      console.log(this.roleChartLabels);

      this.showRoleChart=true;
    }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };


  

}


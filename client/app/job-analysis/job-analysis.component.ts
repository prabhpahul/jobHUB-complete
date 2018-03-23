import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AngularFireDatabase,AngularFireList,AngularFireAction } from 'angularfire2/database';
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
  data:any;
  public barLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public showBarChart:boolean = false;
  public showRoleChart:boolean = false;
  public averagesalaryChart:boolean = false;
  jobRef: AngularFireList<any>;
  jobs$: Observable<any[]>;
  allCity: Observable<any[]>;
  showCrimeChart:boolean = false;
  cities:Array<any>=[];
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
public crimeChartData:Array<any> = [
    {data: [], label: 'CrimeRate'},
  ];
  public crimeChartLabels:Array<any> = ['Calgary','Edmonton','Montreal','Ottawa','Toronto','Vancouver','Windsor','Winnipeg'];
  public crimeChartOptions:any = {
    responsive: true
  };
  public crimeChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public crimeChartLegend:boolean = true;
  public crimeChartType:string = 'line';
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
  showPieChart:boolean = false;
  constructor(private db: AngularFireDatabase, @Inject(LOCAL_STORAGE) private storage: WebStorageService ) {
  
   
}
 
  ngOnInit() {

    this.city=this.storage.get('city');
    this.industry=this.storage.get('industry');
    this.role=this.storage.get('role');
    this.jobRef = this.db.list('/jobs/'+this.industry);
    this.jobs$ = this.jobRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, val:c.payload.val() 
    }));
   });
    this.jobs$.subscribe(data=>{
    _.forEach(data,(d)=>{
      this.jobList.push(d.val);
    })
      
      this.barChart(this.jobList);
       this.roleWiseDonughtChart(this.jobList);
    })
    this.allCity = this.db.list('/satisfaction').valueChanges();
    
    this.allCity.subscribe(data=>{
      
      this.cities = data;
      this.crimeChart(this.cities);
    })
   
  
  }
    
    barChart(jobs){

      this.data = _.groupBy(jobs,(job)=>
      {
        return job.city
      })
    
      //chart assignment starts here
      _.forEach(this.data,(key,value) => {
        
        let averageSalary = 0;
        _.forEach(key,(k)=>{
          averageSalary +=Number(k.Salary);
          
        })
        
        averageSalary = averageSalary/ key.length;
        averageSalary = parseFloat(averageSalary.toFixed(2))
        
        this.salaryData[0].data.push(averageSalary);
        this.barLabels.push(value);
        this.barChartData[0].data.push(key.length);
              
      })
      this.showBarChart=true;
      this.averagesalaryChart=true;
    }

    roleWiseDonughtChart(jobs){
      this.data = _.groupBy(jobs,(job)=>
      {
        return job.Title
      })
   
      //chart assignment starts here
      _.forEach(this.data,(key,value) => {
        
        let averageSalary = 0;
        _.forEach(key,(k)=>{
          averageSalary +=Number(k.Salary);
        })  
        averageSalary = averageSalary/ key.length;
        averageSalary = parseFloat(averageSalary.toFixed(2))
        

        this.roleChartLabels.push(value);
        this.pieChartLabels.push(value);
        this.roleChartData.push(key.length);
        this.pieChartData.push(averageSalary);    

              
      })
      this.showRoleChart=true;
      this.showPieChart = true;
    }
    crimeChart(city){
      _.forEach(city,(c)=>{
        this.crimeChartData[0].data.push(c.crime);
    })
    this.showCrimeChart = true;
    }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };


  

}


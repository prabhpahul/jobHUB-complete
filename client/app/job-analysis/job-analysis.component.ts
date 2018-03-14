import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-analysis',
  templateUrl: './job-analysis.component.html',
  styleUrls: ['./job-analysis.component.css']
})
export class JobAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

 public barChartLabels:string[] = ['Toronto', 'Waterloo', 'Vancouver', 'Montereal', 'Windsor', 'Brampton', 'Manitoba'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Jobs'}
  ];

public doughnutChartLabels:string[] = ['Web Developer', 'Ios', 'andriod'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

}


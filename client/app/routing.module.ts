import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListComponent} from './list/list.component';
import { JobAnalysisComponent } from './job-analysis/job-analysis.component';
import { EmployersComponent } from './employers/employers.component';
const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard',
  	children: [
      
     ],
   component: DashboardComponent },
   {
        component: ListComponent,
        path: 'list/:industry/:salary/:city'
     },
     {
        component: JobAnalysisComponent,
        path: 'analysis'
     },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
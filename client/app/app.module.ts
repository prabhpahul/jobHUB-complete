import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {CdkTableModule} from '@angular/cdk/table';
import { LoginComponent } from './login/login.component';
import{ AppRoutingModule } from './routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ListComponent } from './list/list.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { JobAnalysisComponent } from './job-analysis/job-analysis.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    ListComponent,
    JobAnalysisComponent
  ],
  entryComponents: [DashboardComponent, LoginComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
     AngularFirestoreModule, 
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent
  ],
  entryComponents: [DashboardComponent, LoginComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

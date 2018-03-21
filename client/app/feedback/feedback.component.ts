import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToasterComponent } from '../toaster/toaster.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeedbackComponent>,
   public toast: ToasterComponent) { }

  ngOnInit() {
  }
  feedback(){
  this.toast.setMessage('Thank you for your feedback.' , 'success' , 500);
  }
}

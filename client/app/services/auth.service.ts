import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToasterComponent } from '../toaster/toaster.component';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;
  currentUserName="";
  constructor(public afAuth: AngularFireAuth,
              public toast: ToasterComponent,
              private router: Router) {
  }
login(){
console.log(this.afAuth);
 this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
 .then((res) => {
         console.log(res);
         this.loggedIn = true;
  })
  this.currentUserName = this.afAuth.auth.currentUser.displayName;
};


loginUserEmail(email,password){

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((res) => {
         console.log(res);
         this.loggedIn = true;
      })
  .catch(error=>{
   var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  alert(errorMessage);
  this.loggedIn = false;
   this.toast.setMessage(errorMessage, 'error');
  return;
});

  this.currentUserName = this.afAuth.auth.currentUser.displayName;
}

registerUserEmail(email,password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res) => {
         console.log(res);
         this.loggedIn = true;
      })
  .catch(error=> {
   var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  this.loggedIn = false;
  this.toast.setMessage('Registeration Failed.', 'error');
  return;
});
  this.currentUserName = this.afAuth.auth.currentUser.displayName;
}
logout() {
     this.afAuth.auth.signOut();
      this.loggedIn = false;

  }

  }
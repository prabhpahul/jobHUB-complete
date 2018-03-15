import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;
  currentUserName="";
  constructor(public afAuth: AngularFireAuth,
              private router: Router) {
  }
login(){
console.log(this.afAuth);
 this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  this.loggedIn = true;
  this.currentUserName = this.afAuth.auth.currentUser.displayName;

};

loginUserEmail(email,password){

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  alert(errorMessage);
});
}

logout() {
     this.afAuth.auth.signOut();
      this.loggedIn = false;

  }

  }
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() {
  }

  // Inscription
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve(); // Promesse résolut
          },
          (error) => {
            reject(error);
            console.log('Erreur createNewUser : ' + error);
          }
        );
      }
    );
  }

  // Connexion
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
            console.log('Erreur signInUser : ' + error);
          }
        );
      }
    );
  }

  // Deconnexion
  /**
   signOutUser() {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signOut().then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
            console.log('Erreur signOutUser : ' + error);
          }
        );
      }
    );
  }
   */

  signOutUser() {
    firebase.auth().signOut();
  }

}

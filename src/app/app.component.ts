import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyCJbR5qJcPqItMkeYFzrIR5svR7tfw_lM4',
      authDomain: 'blog-angular-35ea2.firebaseapp.com',
      databaseURL: 'https://blog-angular-35ea2.firebaseio.com',
      projectId: 'blog-angular-35ea2',
      storageBucket: '',
      messagingSenderId: '19208699626'
    };
    firebase.initializeApp(config);
  }

}

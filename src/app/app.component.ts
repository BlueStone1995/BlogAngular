import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      post: {
        title: 'Montagne',
        content: 'Super paysage...',
        loveIts: '0',
        created_at: Date
      }
    }
  ];
}

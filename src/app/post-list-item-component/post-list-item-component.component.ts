import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postImage: string;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;

  constructor() {
  }

  ngOnInit() {
  }

  onLove() {
    this.postLoveIts++;
  }

  onDontLove() {
    this.postLoveIts--;
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }
}

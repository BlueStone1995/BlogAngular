import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

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
    if (this.postLoveIts === 0) {
      return 'black';
    } else if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.post = new Post('', '', 0, null);
    const id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(+id).then( // + pour caster en number
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  onLove() {
    this.post.loveIts++;

  }

  onDontLove() {
    this.post.loveIts--;
  }

  getColor() {
    if (this.post.loveIts === 0) {
      return 'black';
    } else if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }
}

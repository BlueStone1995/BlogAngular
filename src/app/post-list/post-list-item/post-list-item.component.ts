import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../models/Post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  post: Post;
  postSubscription: Subscription;

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

    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.post = posts[id];
      }
    );
    this.postsService.getPosts();
    this.postsService.emmitPosts();
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  onLove() {
    this.postsService.setLove(this.post);
  }

  onDontLove() {
    this.postsService.setDontLove(this.post);
  }

  getColor(): string {
    return this.postsService.getColor(this.post);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

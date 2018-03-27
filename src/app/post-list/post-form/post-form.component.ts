import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  fileIsUploading = false; // Pour savoir si mon fichier est en chargement
  fileURL: string;
  fileUploaded = false; // Pour savoir fin chargement

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const created_at = new Date();
    const newPost = new Post(title, content, loveIts, created_at);
    if (this.fileURL && this.fileURL !== '') {
      newPost.image = this.fileURL;
    }
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }


  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.postsService.uploadFile(file).then(
      (url: string) => {
        this.fileURL = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}

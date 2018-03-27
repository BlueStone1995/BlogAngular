import {Injectable} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  // Emet contenu de posts[] à travers le subject
  emmitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emmitPosts();
      });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emmitPosts();
  }

  removePost(post: Post) {
    if (post.image) {
      const storageRef = firebase.storage().refFromURL(post.image);
      storageRef.delete().then(
        () => {
          console.log('Photo supprimée !');
        }
      ).catch(
        (error) => {
          console.log('Fichier non trouvé : ' + error);
        }
      );
    }
    const indexPostToRemove = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts.splice(indexPostToRemove, 1);
    this.savePosts();
    this.emmitPosts();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name) // Enregistre le fichier au nom de dossier choisis
          .put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED, // Réagit au changement d'état de mon upload via firebase
          () => {
            console.log('Chargement...');
          },
          (error) => {
            console.log('Erreur de chargement : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.downloadURL);
          }
        );
      }
    );
  }

  setLove(post: Post) {
    post.loveIts++;
    this.savePosts();
    this.emmitPosts();
  }

  setDontLove(post: Post) {
    post.loveIts--;
    this.savePosts();
    this.emmitPosts();
  }

  getColor(post: Post): string {
    if (post.loveIts === 0) {
      return 'black';
    } else if (post.loveIts > 0) {
      return 'green';
    } else if (post.loveIts < 0) {
      return 'red';
    }
    this.savePosts();
    this.emmitPosts();
  }
}

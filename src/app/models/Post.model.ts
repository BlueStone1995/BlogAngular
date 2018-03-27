export class Post {

  image: string;

  constructor(public title: string,
              public content: string,
              public loveIts: number,
              public created_at: Date) {
  }
}

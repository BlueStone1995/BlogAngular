export class Post {

  constructor(public image: string,
              public title: string,
              public content: string,
              public loveIts: number,
              public created_at: Date) {
  }
}

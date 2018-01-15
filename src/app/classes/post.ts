export class Post {
    id: string;
    title: string;
    content: string;
    mode = 'default';

    constructor(p?) {
      p = p || {};
      this.test();
      this.id = p.id || null;
      this.title = p.title || null;
      this.content = p.content || null;
      console.log(this);
    }

    test(): void {
      console.log('TEST');
    }
}

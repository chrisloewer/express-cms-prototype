export class Post {
    id: string;
    title: string;
    content: string;
    state = 'default';

    constructor() {
      console.log('State: ' +  this.state);
    }
}

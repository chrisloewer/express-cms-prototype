export class Post {
  id: string;
  title: string;
  content: string;
  mode: string;

  constructor(p?) {
    p = p || {};
    this.id = p.id || null;
    this.title = p.title || null;
    this.content = p.content || null;
    this.mode = 'default';
  }

  toggleMode(modeValue?: string): void {  // Valid Options: default, edit, preview
    modeValue = modeValue || 'default';
    switch (modeValue) {
      case 'edit': {
        this.mode = 'edit';
        break;
      }
      case 'preview': {
        this.mode = 'preview';
        break;
      }
      default: {
        this.mode = 'default';
      }
    }
    console.log(this.mode);
  }

  isEditVisible(): boolean {
    return this.mode !== 'preview' ? true : false;
  }

  isPreviewVisible(): boolean {
    return this.mode !== 'edit' ? true : false;
  }
}

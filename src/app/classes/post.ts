import { ContentBlock } from './content-block';

export class Post {
  id: string;
  title: string;
  content: string;
  contentBlocks: ContentBlock[];
  mode: string;

  constructor() {
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
    return this.mode !== 'preview';
  }

  isPreviewVisible(): boolean {
    return this.mode !== 'edit';
  }
}

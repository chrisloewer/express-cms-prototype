
type ModeType = 'edit' | 'default' | 'preview';

export class Page {
  mode: ModeType;

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
  }

  isEditVisible(): boolean {
    return this.mode !== 'preview';
  }

  isPreviewVisible(): boolean {
    return this.mode !== 'edit';
  }
}

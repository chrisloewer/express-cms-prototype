type InputType = 'text' | 'wysiwyg' | 'img';

export class ContentBlock {
  id: String;
  displayName: String;
  inputType: InputType;
  content: String;
}

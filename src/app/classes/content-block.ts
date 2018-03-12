type InputType = 'text' | 'wysiwyg' | 'img';

export class ContentBlock {
  id: String;
  inputType: InputType;
  content: String;
}

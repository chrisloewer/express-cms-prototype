type InputType = 'text' | 'wysiwyg' | 'img';

export class ExpectedField {
  constructor(
    public id: String,
    public inputType: InputType
    ) {}
}

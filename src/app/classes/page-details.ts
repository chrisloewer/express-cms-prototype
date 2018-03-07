import { ExpectedField } from './expected-field';

export class PageDetails {
  title: String;
  expectedFields: ExpectedField[];
  // apiUrl: String;
  // apiContentId: String;

  constructor() {
  }

  private getExpectedFields() {
    // TODO get this data from API or VAR.  currently static
    this.expectedFields = [
      {
        id: 'section-01',
        inputType: 'text'
      },
      {
        id: 'section-02',
        inputType: 'wysiwyg'
      }
    ];
  }
}

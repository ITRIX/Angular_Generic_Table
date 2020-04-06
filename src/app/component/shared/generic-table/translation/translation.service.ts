import { Injectable } from '@angular/core';


export class TranslationSet {
  public languange: string;
  public values: { [key: string]: any } = {};
}

@Injectable()
export class TranslationService {

  public languages = ['de', 'en-US'];

  public currentLanguage = 'en-US';

  private dictionary: { [key: string]: any } = {
    de: {
      languange: 'de',
      values: {
        dashboard: {
          table: {
            id: 'ICH WÜRDE',
            name: 'Name',
            status: 'Verheiratet / unverheiratet',
            salary: 'Gehalt',
            dob: 'Geburtsdatum',
            skills: 'Kompetenzen'
          }
        }
      }
    },
    'en-US': {
      languange: 'en-US',
      values: {
        dashboard: {
          table: {
            id: 'ID',
            name: 'Name',
            status: 'Married / Unmarried',
            salary: 'Salary',
            dob: 'Date of Birth',
            skills: 'Skills'
          }
        }
      }
    }
  };

  constructor() { }

  translate(value: string): string {
    if (this.dictionary[this.currentLanguage] != null) {
      const getter = new Function('obj', 'return obj.' + value + ';');
      return getter(this.dictionary[this.currentLanguage].values);
    }
  }
}

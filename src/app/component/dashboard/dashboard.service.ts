import { Injectable } from '@angular/core';
import { DynamicLabelComponent } from '../shared/generic-table/dynamic-label/dynamic-label.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getPersonDetails() {
    return [{
      id: 1,
      name: 'Prakash',
      status: false,
      salary: 1000,
      currencyValue: 'EUR',
      dob: '674604000000',
      'custom-component': {
        data: ['React', 'HTML5']
      }
    },
    {
      id: 2,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['PHP', 'VB8']
      }
    },
    {
      id: 3,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['Angular', 'CSS']
      }
    },
    {
      id: 4,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['Bootstrap', 'SCSS']
      }
    },
    {
      id: 5,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['Typescript 3', 'HTML']
      }
    },
    {
      id: 6,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['JAVA', 'SCSS']
      }
    },
    {
      id: 7,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['Vue.js', 'PHP']
      }
    },
    {
      id: 8,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['HTML5', 'JAVA']
      }
    },
    {
      id: 9,
      name: 'Prakash',
      status: true,
      salary: 1000,
      dob: '674604000000',
      currencyValue: 'INR',
      'custom-component': {
        data: ['JSP', 'CSS3']
      }
    }];
  }
}

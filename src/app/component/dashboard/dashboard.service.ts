import { Injectable } from '@angular/core';

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
        'component-index': 1,
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
        'component-index': 1,
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
        'component-index': 0,
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
        'component-index': 1,
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
        'component-index': 0,
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
        'component-index': 0,
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
        'component-index': 0,
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
        'component-index': 0,
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
        'component-index': 1,
        data: ['JSP', 'CSS3']
      }
    }];
  }
}

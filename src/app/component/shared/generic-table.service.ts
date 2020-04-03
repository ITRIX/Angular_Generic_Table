import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class GenericTableService {
  tabelEvents = new Subject();
  eventsData = [];
  constructor() { }

  /**
   * getData
   *
   * @description - Fetch data
   * @parms - event : name of the event | query : endpoint URL | payload : for edit event it contains payload
   */
  getData(event: string, query: string, payload: any) {
    // Use this.eventsData variable to display purpose
    this.eventsData = [];
    this.eventsData.push('Event : ' + event);
    this.eventsData.push('Query : ' + query);
    if (payload) { this.eventsData.push('Updated Data :' + payload); }
    this.eventsData.push('Data Load Started');
    // Here we can make backend call but currently we don't have api so just returning empty Observable
    return new Observable((observer) => {
      this.eventsData.push('Data Load Succeded');
      observer.next({});
    });
  }

}

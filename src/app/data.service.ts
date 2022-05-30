import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  get(url) {
    return of([
      { OrganizationName: 'Organization 1', OrganizationId: '1' },
      { OrganizationName: 'Organization 2', OrganizationId: '2' },
      { OrganizationName: 'Organization 3', OrganizationId: '3' },
      { OrganizationName: 'Organization 4', OrganizationId: '4' },
      { OrganizationName: 'Organization 5', OrganizationId: '5' },
      { OrganizationName: 'Organization 6', OrganizationId: '6' },
    ]);
  }

}
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Table } from '../store/tables/tables.reducer';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private tables: Table[] = [
    {
      id: uuid(),
      numberOfSits: 5,
      location: "Top Left Corner"
    },
    {
      id: uuid(),
      numberOfSits: 4,
      location: "Top Right Corner"
    },
    {
      id: uuid(),
      numberOfSits: 2,
      location: "Bottom Left Corner"
    },
    {
      id: uuid(),
      numberOfSits: 6,
      location: "Bottom Right Corner"
    },
    {
      id: uuid(),
      numberOfSits:4 ,
      location: "Center"
    }
  ];

  constructor() { }

  public getTables(): Observable<Table[]> {
    return from([this.tables]);
  }
}

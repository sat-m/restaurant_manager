import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Table } from '../store/tables/tables.reducer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private baseUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  public getTables(): Observable<Table[] | Error> {

    return this.http.get(this.baseUrl)
      .pipe(
        map((data: any) => {
          return data.tables as Table[];
        })
      );
  }
}

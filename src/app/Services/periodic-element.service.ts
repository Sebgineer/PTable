import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPElement } from '../Interfaces/ipelement';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementService {

  url: string = "https://periodic-table-elements-info.herokuapp.com/elements";

  constructor(private http: HttpClient) { }

  GetTable(): Observable<IPElement[]> {
    return this.http.get<IPElement[]>(this.url);
  }
}

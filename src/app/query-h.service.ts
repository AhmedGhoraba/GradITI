import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryHService {

  constructor(private http: HttpClient) { }
}

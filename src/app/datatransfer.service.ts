import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  private data = new BehaviorSubject([]);
  dataContainer = this.data.asObservable();

  dataTransporter(getData){
    this.data.next(getData);
  }
  constructor() { }
}

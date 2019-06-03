import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { items } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  getJeansItems():Observable<any>{
   return  this.http.get('assets/json/jeansDescription.json');
  }
}

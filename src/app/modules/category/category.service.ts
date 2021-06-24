import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  save( name: string ): Observable<any> {
    const params = {
       name, restaurant: '60d3f0799d493162042a915c'
    };
    return this.http.put('http://localhost:9000/categories', params);
  }

  fetch(): Observable<any> {
    return this.http.get('http://localhost:9000/categories');
  }

  dropCollection(): Observable<any> {
    return this.http.delete('http://localhost:9000/categories');
  }

  update( name: string, status: boolean, id: string ): Observable<any> {
    const params:any = {};
    if ( name !== undefined && name !== null && name !== '' ) {
      params.name = name;
    }

    if ( status !== undefined && status !== null ) {
      params.status = status;
    }

    return this.http.post(`http://localhost:9000/categories/${ id }`, params);
  }
}

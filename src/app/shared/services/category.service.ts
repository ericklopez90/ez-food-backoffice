import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtil } from 'utils/classes/service.class';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  serviceUtil: ServiceUtil;
  endpointRoute: string;
  constructor(
    private http: HttpClient
  ) {
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('categories');
  }

  save( formData:FormData ): Observable<any> {
    return this.http.put( this.endpointRoute, formData);
  }

  fetch(): Observable<any> {
    return this.http.get( this.endpointRoute );
  }

  dropCollection(): Observable<any> {
    return this.http.delete( this.endpointRoute );
  }

  update( name: string, status: boolean, id: string ): Observable<any> {
    const rawParams = { name, status, id };
    const params    = this.serviceUtil.validateParams( rawParams );
    return this.http.post(`${ this.endpointRoute }/${ id }`, params);
  }
}

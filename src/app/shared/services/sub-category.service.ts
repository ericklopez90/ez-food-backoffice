import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtil } from 'utils/classes/service.class';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  serviceUtil: ServiceUtil;
  endpointRoute: string;
  constructor(
    private http: HttpClient
  ) {
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('sub-categories');
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

  update( status: boolean, id: string, name?: string, category?: string ): Observable<any> {
    const rawParams = { name, status, id, category };
    const params    = this.serviceUtil.validateParams( rawParams );
    return this.http.post(`${ this.endpointRoute }/${ id }`, params);
  }

  fetchOne( id:string ): Observable<any> {
    return this.http.get( `${this.endpointRoute}/${id}` );
  }
}

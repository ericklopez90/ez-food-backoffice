import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@interfaces/token.interface';
import { Observable } from 'rxjs';
import { ServiceUtil } from 'utils/classes/service.class';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  serviceUtil: ServiceUtil;
  endpointRoute: string;

  constructor(
    private http: HttpClient
  ) { 
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('ingredients');
  }

  getOneIngredient(params:string): Observable<any>{
    return this.http.get<any>( `${this.endpointRoute}?match=${params}`);
  }

  getIngredient(){
    return this.http.get( this.endpointRoute);
  }

  putOneIngredient(params:string): Observable<any>{
    return this.http.put<any>(this.endpointRoute, params);
  }
}

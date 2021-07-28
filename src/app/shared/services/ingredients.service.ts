import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getIngredient(params:string){
    return this.http.get( `${this.endpointRoute}?match=${params}`);
  }
}

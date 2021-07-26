import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@interfaces/token.interface';
import { Observable } from 'rxjs';
import { ServiceUtil } from 'utils/classes/service.class';


@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {

  serviceUtil: ServiceUtil;
  endpointRoute: string;

  constructor( private http: HttpClient ) 
  {
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('restore-password');
  }

  recovery( email:string, brand:string ):Observable<ServerResponse>{
    const url = `${this.endpointRoute}`;
    const body = { email, brand };

    return this.http.post<ServerResponse>(url, body)
  }
}
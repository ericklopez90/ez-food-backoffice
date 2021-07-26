import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private router: Router,
  ) {}


  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let _request = request;

    _request = request.clone({
        setHeaders: {
          bearer: localStorage.getItem('token') || ''
        }
    });

    return next.handle( _request )
    .pipe(
      catchError( (err: HttpErrorResponse) => {
        this.loaderService.hide();
        if ( err.status === 403 ) {
          this.router.navigateByUrl('/login')
        }

        return throwError( err );

      })
      )
      .pipe(
        map<HttpEvent<any>, any>( ( evt: HttpEvent<any> ) => {
          if ( evt instanceof HttpResponse ) {
            this.loaderService.hide()
          }
          return evt;
      })
    )
  }
}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let _request = request;

    _request = request.clone({
        setHeaders: {
          bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRVc2VyIjp7Il9pZCI6IjYwYmE2MzdkZDg2NzY5NjRlY2E3YjRjNiIsIm5hbWUiOiJBbGJlcnRvIiwibGFzdF9uYW1lIjoiU2l1cm9iIiwiYnJhbmQiOnsiX2lkIjoiNjBiN2RhOTg4ZDhmMGM1YjE4YzMyNmFiIiwibmFtZSI6IkFwcCBNYW5hZ2VyIC0gRVogRm9vZCJ9LCJwaG9uZSI6NTUyNzA3MDM3MSwiZW1haWwiOiJhbGJlcnRvQGV6LXRlay5jb20ubXgifSwiaWF0IjoxNjI0NTAyMjgzLCJleHAiOjE2MjQ1MjM4ODN9.1zMg5ibmn7qMDg7PWq0eVXrwTTmNpmYtJJESHl0rljI'
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

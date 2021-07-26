import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { RestaurantService } from '@services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  restaurants: any[] = [];
  subs: Subscription[] = [];

  formularioLogin: FormGroup = this.fb.group({
    username: ['', [ Validators.required ] ],
    pass: ['', [Validators.required, Validators.minLength(4)]],
    restaurant: ['', [ Validators.required ] ]
  })

  constructor(
    private loginServices: LoginService,
    private fb: FormBuilder,
    private _router: Router,
    private toastr: ToastrService,
    private restaurant$: RestaurantService
  ) {}

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    const s = this.restaurant$.fetch()
    .subscribe( ({ payload }) => this.restaurants = payload );
    this.subs.push( s );
  }

  login(): void {
    const { username, pass, restaurant } = this.formularioLogin.value;

    const s = this.loginServices.login(username, pass, restaurant)
      .subscribe( ({ payload }) => {
          localStorage.setItem('token', payload.token);
          localStorage.setItem('user', JSON.stringify( payload ) );
          this._router.navigateByUrl('/dashboard');
        },
        ( { error }: HttpErrorResponse ) => this.toastr.error( error.response.message, error.response.title )
      );
      this.subs.push( s );
  }
}
/*
email:alberto@ez-tek.com.mx
pass:Password1!
brand:60b7da988d8f0c5b18c326ab
*/

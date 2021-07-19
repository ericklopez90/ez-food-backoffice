import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(4)] ]
  })
  error=false
  

  constructor(
    private loginServices: LoginService,
    private fb : FormBuilder,
    private _router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  login(){
    const brand = '60b7da988d8f0c5b18c326ab'
    const {email, pass} = this.formularioLogin.value;

    this.loginServices.login( email, pass, brand )
    .subscribe( resp => { 
      console.log(resp);
        localStorage.setItem('token', resp.payload.token);
        localStorage.setItem('user', JSON.stringify(resp.payload));
        this._router.navigateByUrl('/dashboard');
    },
    error => this.toastr.error('La contraseña o el usuario es incorrecto', 'Inténtalo de nuevo' ))
  }
  }
/*
email:alberto@ez-tek.com.mx
pass:Password1!
brand:60b7da988d8f0c5b18c326ab
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecoverPasswordService } from '@services/recover-password.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formRecover: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
  })  

  constructor( private fb: FormBuilder,
               private RecoverPasswordService:RecoverPasswordService,
               private _router: Router,
               private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.formRecover.value
  }

  recovery(){
    const email = this.formRecover.value
    const brand = '60b7da988d8f0c5b18c326ab'
    
    this.RecoverPasswordService.recovery( email, brand)
    .subscribe(resp =>{
      console.log(resp)
      this.toastr.success(resp.response.message, resp.response.title)
      this._router.navigateByUrl('/login')
    },
    error => this.toastr.error(error.error.response.message, error.error.response.title),
    )
  }
}
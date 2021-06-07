import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor( private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Se ha agregado correctamente', 'Hecho!');
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.css']
})
export class NewCategoriesComponent implements OnInit {

  constructor(private toastr :ToastrService) { }

  ngOnInit(): void {
  }
  showSuccess() {
    this.toastr.success('Se ha agregado correctamente', 'Hecho!');
  }
}

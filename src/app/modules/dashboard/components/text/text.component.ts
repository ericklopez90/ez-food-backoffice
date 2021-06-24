import { Component, Input, OnInit } from '@angular/core';
import { Text } from '@modules/dashboard/interface/text.interface';

@Component({
  selector: 'text-content',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() texts: Text [] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  validarIcon(a:number){
    if (a < 0){
      return 'trending_down'
    } else if (a > 0) {
      return 'trending_up'
    } else {
      return 'trending_flat'
    } 
  }
  validateClass(a:number):string{
    if (a < 0){
      return 'text-danger';
    } else if (a > 0) {
      return 'text-success';
    } else {
      return 'text-info';
    }
  }
}
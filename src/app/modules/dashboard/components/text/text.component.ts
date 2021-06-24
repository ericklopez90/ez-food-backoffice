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
}
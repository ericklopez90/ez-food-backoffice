import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {

  @Output() sideNavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  toggle(): void {
    this.sideNavToggle.emit( true );
  }

}

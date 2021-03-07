import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent {

  @Output() sortie: EventEmitter<number> = new EventEmitter();
  activated = false;

  constructor() { }

  toggle() {
    this.activated = !this.activated;
    this.sortie.emit();
  }


}

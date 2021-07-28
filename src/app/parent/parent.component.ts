import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {EnfantComponent} from '../enfant/enfant.component';
import {bind} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  total = 0;

  @ViewChildren(EnfantComponent) viewChildren!: QueryList<EnfantComponent>;

  constructor() { }

  calcTotalParent() {
    this.total = 0;

    this.viewChildren.toArray().reverse().forEach((child, i) => {
      if (child.activated) {
        this.total = Math.pow(2, i);
      }
    });
  }

  resetChildrens() {
    this.viewChildren.forEach( children => children.activated = false);
    this.total = 0;
  }
}

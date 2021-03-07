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
    let bindex = 0;
    this.total = 0;
    this.viewChildren.toArray().reverse().forEach( (children, index) => {
      bindex = !bindex ? 1 : bindex  * 2;
      if (children.activated) {
        this.total += bindex;
      }
    });
  }

  resetChildrens() {
    this.viewChildren.forEach( children => children.activated = false);
    this.total = 0;
  }
}

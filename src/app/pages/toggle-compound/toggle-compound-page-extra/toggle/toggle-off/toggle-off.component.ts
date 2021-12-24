import { Component, Input, OnInit } from '@angular/core';

import { ToggleComponent } from '../toggle.component';

@Component({
  selector: 'app-toggle-off',
  template: '<ng-content *ngIf="!toggle.on"></ng-content>'
})
export class ToggleOffComponent implements OnInit {

  constructor(public toggle: ToggleComponent) { }

  ngOnInit(): void {
  }

}

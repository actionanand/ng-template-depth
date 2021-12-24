import { Component, OnInit } from '@angular/core';

import { ToggleComponent } from '../toggle.component';

@Component({
  selector: 'app-toggle-on',
  template: '<ng-content *ngIf="toggle.on"></ng-content>'
})
export class ToggleOnComponent implements OnInit {

  constructor(public toggle: ToggleComponent) { }

  ngOnInit(): void {
  }

}
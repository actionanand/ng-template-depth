import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-off',
  template: '<ng-content *ngIf="!on"></ng-content>'
})
export class ToggleOffComponent implements OnInit {
  @Input() on!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

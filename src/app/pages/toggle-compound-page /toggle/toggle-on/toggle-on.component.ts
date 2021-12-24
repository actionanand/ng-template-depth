import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-on',
  template: '<ng-content *ngIf="on"></ng-content>'
})
export class ToggleOnComponent implements OnInit {
  @Input() on!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
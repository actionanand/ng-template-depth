import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: '<ng-content></ng-content>'
})
export class ToggleComponent implements OnInit {

  @Input() on!: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }

}

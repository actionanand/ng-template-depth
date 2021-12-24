import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ToggleOffComponent } from './toggle-off/toggle-off.component';
import { ToggleOnComponent } from './toggle-on/toggle-on.component';

@Component({
  selector: 'app-toggle',
  template: '<ng-content></ng-content>'
})
export class ToggleComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() on!: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleOnComponent) toggleOn!: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff!: ToggleOffComponent;
  @ContentChild(ToggleButtonComponent) toggleButton!: ToggleButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.toggleButton.toggled.subscribe((on: boolean) => {
      this.on = on;
      this.toggled.emit(on);
      this.update();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { on } = changes;
    if (on) {
      this.update();
    }
  }

  onClickingToggle() {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }

  update() {
    this.toggleOn.on = this.on;
    this.toggleOff.on = this.on;
    this.toggleButton.on = this.on;
  }

}

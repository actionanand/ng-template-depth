import { Component, Input, OnInit, Output } from '@angular/core';

import { ToggleComponent } from '../toggle.component';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() on!: boolean;

  constructor(public toggle: ToggleComponent) { }

  ngOnInit(): void {
  }

  onClickingToggle() {
    this.toggle.setOnState(!this.toggle.on);
  }

}

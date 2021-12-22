import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit {

  @ContentChild(TemplateRef) mouseTemplate!: TemplateRef<any>;

  mouseState = { x:0, y:0 };

  constructor() { }

  ngOnInit(): void {
  }

  onMovingMouse(event: MouseEvent) {
    this.mouseState.x = event.clientX;
    this.mouseState.y = event.clientY;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() on!: boolean;
  @Input() className!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

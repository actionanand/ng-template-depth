import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-page',
  templateUrl: './toggle-page.component.html',
  styleUrls: ['./toggle-page.component.scss']
})
export class TogglePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(value: any) {
    console.log(value);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-page',
  templateUrl: './toggle-compound-page.component.html',
  styleUrls: ['./toggle-compound-page.component.scss']
})
export class ToggleCompoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(value: any) {
    console.log(value);
  }

}

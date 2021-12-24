import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-page',
  templateUrl: './toggle-compound-extra-page.component.html',
  styleUrls: ['./toggle-compound-extra-page.component.scss']
})
export class ToggleCompoundExtraPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(value: any) {
    console.log('Toggle : ' +value);
  }

}

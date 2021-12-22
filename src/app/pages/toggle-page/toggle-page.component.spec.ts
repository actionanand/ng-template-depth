import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePageComponent } from './toggle-page.component';

describe('TogglePageComponent', () => {
  let component: TogglePageComponent;
  let fixture: ComponentFixture<TogglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

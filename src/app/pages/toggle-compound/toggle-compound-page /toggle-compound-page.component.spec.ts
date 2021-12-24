import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCompoundPageComponent } from './toggle-compound-page.component';

describe('TogglePageComponent', () => {
  let component: ToggleCompoundPageComponent;
  let fixture: ComponentFixture<ToggleCompoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCompoundPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCompoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

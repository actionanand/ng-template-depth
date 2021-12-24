import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCompoundExtraPageComponent } from './toggle-compound-extra-page.component';

describe('TogglePageComponent', () => {
  let component: ToggleCompoundExtraPageComponent;
  let fixture: ComponentFixture<ToggleCompoundExtraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCompoundExtraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCompoundExtraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

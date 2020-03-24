import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormat1Component } from './new-format1.component';

describe('NewFormat1Component', () => {
  let component: NewFormat1Component;
  let fixture: ComponentFixture<NewFormat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

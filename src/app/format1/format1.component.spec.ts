import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Format1Component } from './format1.component';

describe('Format1Component', () => {
  let component: Format1Component;
  let fixture: ComponentFixture<Format1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Format1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Format1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

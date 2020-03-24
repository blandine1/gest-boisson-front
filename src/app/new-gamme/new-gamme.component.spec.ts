import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGammeComponent } from './new-gamme.component';

describe('NewGammeComponent', () => {
  let component: NewGammeComponent;
  let fixture: ComponentFixture<NewGammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

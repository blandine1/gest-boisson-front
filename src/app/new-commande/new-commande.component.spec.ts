import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommandeComponent } from './new-commande.component';

describe('NewCommandeComponent', () => {
  let component: NewCommandeComponent;
  let fixture: ComponentFixture<NewCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

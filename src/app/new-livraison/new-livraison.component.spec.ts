import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLivraisonComponent } from './new-livraison.component';

describe('NewLivraisonComponent', () => {
  let component: NewLivraisonComponent;
  let fixture: ComponentFixture<NewLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

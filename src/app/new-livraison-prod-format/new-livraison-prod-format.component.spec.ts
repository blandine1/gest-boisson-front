import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLivraisonProdFormatComponent } from './new-livraison-prod-format.component';

describe('NewLivraisonProdFormatComponent', () => {
  let component: NewLivraisonProdFormatComponent;
  let fixture: ComponentFixture<NewLivraisonProdFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLivraisonProdFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLivraisonProdFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

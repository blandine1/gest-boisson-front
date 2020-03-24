import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFormatCommandeComponent } from './produit-format-commande.component';

describe('ProduitFormatCommandeComponent', () => {
  let component: ProduitFormatCommandeComponent;
  let fixture: ComponentFixture<ProduitFormatCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitFormatCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFormatCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

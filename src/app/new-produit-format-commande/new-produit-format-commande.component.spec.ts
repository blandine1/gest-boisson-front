import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitFormatCommandeComponent } from './new-produit-format-commande.component';

describe('NewProduitFormatCommandeComponent', () => {
  let component: NewProduitFormatCommandeComponent;
  let fixture: ComponentFixture<NewProduitFormatCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProduitFormatCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitFormatCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

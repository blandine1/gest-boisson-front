import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFormatComponent } from './produit-format.component';

describe('ProduitFormatComponent', () => {
  let component: ProduitFormatComponent;
  let fixture: ComponentFixture<ProduitFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

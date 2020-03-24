import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduitFormatComponent } from './new-produit-format.component';

describe('NewProduitFormatComponent', () => {
  let component: NewProduitFormatComponent;
  let fixture: ComponentFixture<NewProduitFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProduitFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduitFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

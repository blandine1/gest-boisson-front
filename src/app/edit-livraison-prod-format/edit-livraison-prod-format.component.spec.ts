import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLivraisonProdFormatComponent } from './edit-livraison-prod-format.component';

describe('EditLivraisonProdFormatComponent', () => {
  let component: EditLivraisonProdFormatComponent;
  let fixture: ComponentFixture<EditLivraisonProdFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLivraisonProdFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLivraisonProdFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

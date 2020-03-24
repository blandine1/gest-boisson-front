import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduitFormatComponent } from './edit-produit-format.component';

describe('EditProduitFormatComponent', () => {
  let component: EditProduitFormatComponent;
  let fixture: ComponentFixture<EditProduitFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProduitFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProduitFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

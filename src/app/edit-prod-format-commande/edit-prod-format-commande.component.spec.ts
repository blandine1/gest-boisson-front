import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdFormatCommandeComponent } from './edit-prod-format-commande.component';

describe('EditProdFormatCommandeComponent', () => {
  let component: EditProdFormatCommandeComponent;
  let fixture: ComponentFixture<EditProdFormatCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProdFormatCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdFormatCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

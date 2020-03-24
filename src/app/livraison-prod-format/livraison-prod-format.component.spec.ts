import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonProdFormatComponent } from './livraison-prod-format.component';

describe('LivraisonProdFormatComponent', () => {
  let component: LivraisonProdFormatComponent;
  let fixture: ComponentFixture<LivraisonProdFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonProdFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonProdFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

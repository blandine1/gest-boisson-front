import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentenuComponent } from './contentenu.component';

describe('ContentenuComponent', () => {
  let component: ContentenuComponent;
  let fixture: ComponentFixture<ContentenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

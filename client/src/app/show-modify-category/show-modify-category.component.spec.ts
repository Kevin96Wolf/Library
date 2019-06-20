import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModifyCategoryComponent } from './show-modify-category.component';

describe('ShowModifyCategoryComponent', () => {
  let component: ShowModifyCategoryComponent;
  let fixture: ComponentFixture<ShowModifyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowModifyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModifyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

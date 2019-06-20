import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModifyUserComponent } from './show-modify-user.component';

describe('ShowModifyUserComponent', () => {
  let component: ShowModifyUserComponent;
  let fixture: ComponentFixture<ShowModifyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowModifyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

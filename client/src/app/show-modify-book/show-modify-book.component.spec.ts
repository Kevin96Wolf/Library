import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModifyBookComponent } from './show-modify-book.component';

describe('ShowModifyBookComponent', () => {
  let component: ShowModifyBookComponent;
  let fixture: ComponentFixture<ShowModifyBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowModifyBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModifyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

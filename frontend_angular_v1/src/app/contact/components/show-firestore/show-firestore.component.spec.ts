import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFirestoreComponent } from './show-firestore.component';

describe('ShowFirestoreComponent', () => {
  let component: ShowFirestoreComponent;
  let fixture: ComponentFixture<ShowFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

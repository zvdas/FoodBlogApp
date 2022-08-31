import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFirestoreComponent } from './contact-firestore.component';

describe('ContactFirestoreComponent', () => {
  let component: ContactFirestoreComponent;
  let fixture: ComponentFixture<ContactFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

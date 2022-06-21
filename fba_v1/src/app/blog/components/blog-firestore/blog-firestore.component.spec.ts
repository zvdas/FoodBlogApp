import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFirestoreComponent } from './blog-firestore.component';

describe('BlogFirestoreComponent', () => {
  let component: BlogFirestoreComponent;
  let fixture: ComponentFixture<BlogFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

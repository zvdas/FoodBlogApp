import { TestBed } from '@angular/core/testing';

import { BlogFirestoreService } from './blog-firestore.service';

describe('BlogFirestoreService', () => {
  let service: BlogFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

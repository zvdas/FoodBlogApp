import { TestBed } from '@angular/core/testing';

import { ContactFirestoreService } from './contact-firestore.service';

describe('ContactFirestoreService', () => {
  let service: ContactFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

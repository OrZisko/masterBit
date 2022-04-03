import { TestBed } from '@angular/core/testing';

import { ContactResolver.ServiceService } from './contact-resolver.service.service';

describe('ContactResolver.ServiceService', () => {
  let service: ContactResolver.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResolver.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

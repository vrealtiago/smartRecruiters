import { TestBed } from '@angular/core/testing';

import { PostingListService } from './posting-list.service';

describe('PostingListService', () => {
  let service: PostingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

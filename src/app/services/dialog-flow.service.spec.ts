import { TestBed, inject } from '@angular/core/testing';

import { DialogFlowService } from './dialog-flow.service';

describe('DialogFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogFlowService]
    });
  });

  it('should be created', inject([DialogFlowService], (service: DialogFlowService) => {
    expect(service).toBeTruthy();
  }));
});

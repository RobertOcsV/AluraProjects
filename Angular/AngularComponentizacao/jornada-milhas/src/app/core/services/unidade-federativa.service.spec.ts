import { TestBed } from '@angular/core/testing';

import { UnidadeFederativaService } from './unidade-federativa.service';

describe('UnidadeFederativaService', () => {
  let service: UnidadeFederativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeFederativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

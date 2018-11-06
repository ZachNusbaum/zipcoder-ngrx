import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ZipcodeEffects } from './zipcode.effects';

describe('ZipcodeEffects', () => {
  let actions$: Observable<any>;
  let effects: ZipcodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ZipcodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ZipcodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

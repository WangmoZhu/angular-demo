import { Directive } from '@angular/core';
import { Validator } from '@angular/forms';

@Directive({
  selector: '[gteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GteValidatorDirective, multi: true },
  ],
})
export class GteValidatorDirective implements Validator {
  constructor() {}

  validate(c: FormControl) {
    if (c.value !== 'kane') {
      return { gte: true, requiredValue: 'kane' };
    }
    return null;
  }
}

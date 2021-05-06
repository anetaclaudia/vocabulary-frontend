import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidator {
  /** This validator is meant to check that user's input is not just a whitespace. */
  static noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) !== null){
      if ((control.value).trim().length === 0){
        return {noWhitespaceValidator: true};
      }
    }
    return null;
  }
}

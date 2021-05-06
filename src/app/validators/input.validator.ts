import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) !== null){
      if ((control.value as string).indexOf(' ') >= 0){
        return {cannotContainSpace: true};
      }
    }
    return null;
  }

  // noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  //   const isWhitespace = (control.value || '').trim().length === 0;
  //   const isValid = !isWhitespace;
  //   return isValid ? null : {whitespace: true};
  // }
}

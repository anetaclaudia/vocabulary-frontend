import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidator {
  // static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
  //   if ((control.value as string) !== null){
  //     if ((control.value as string).indexOf(' ') >= 0){
  //       return {cannotContainSpace: true};
  //     }
  //   }
  //   return null;
  // }
  /** This validator is meant to check that user's input is not whitespace. */
  static noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) !== null){
      if ((control.value).trim().length === 0){
        return {noWhitespaceValidator: true};
      }
    }
    return null;
  }
}

import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WordService} from '../service/word.service';
import {Word} from '../model/Word';
import {InputValidator} from '../validators/input.validator';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss'],
  providers: [WordService]
})
export class WordFormComponent implements OnInit {
  wordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private wordService: WordService) {
  }

  ngOnInit(): void {
    this.wordForm = new FormGroup({
        wordInEstonian: new FormControl('', [Validators.required, InputValidator.noWhitespaceValidator]),
        wordDefinitionInEstonian: new FormControl('', [Validators.required, InputValidator.noWhitespaceValidator]),
        wordInEnglish: new FormControl('', [Validators.required, InputValidator.noWhitespaceValidator]),
        wordDefinitionInEnglish: new FormControl('', [Validators.required, InputValidator.noWhitespaceValidator])
      }
    );
  }

  onSubmit(): void {
    const word: Word = this.wordForm.value as Word;
    if (this.wordForm.valid){
      this.wordService.addWord(word).subscribe();
      this.wordForm.reset();
    }
  }

  get wordInEstonian(): AbstractControl {
    return this.wordForm.get('wordInEstonian');
  }

  get wordDefinitionInEstonian(): AbstractControl {
    return this.wordForm.get('wordDefinitionInEstonian');
  }

  get wordInEnglish(): AbstractControl {
    return this.wordForm.get('wordInEnglish');
  }

  get wordDefinitionInEnglish(): AbstractControl {
    return this.wordForm.get('wordDefinitionInEnglish');
  }
}

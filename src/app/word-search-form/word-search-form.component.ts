import {Component, OnInit} from '@angular/core';
import {Language} from '../model/Language';
import {FormControl, FormGroup, AbstractControl, Validators} from '@angular/forms';
import {WordService} from '../service/word.service';
import {Word} from '../model/Word';

@Component({
  selector: 'app-word-search-form',
  templateUrl: './word-search-form.component.html',
  styleUrls: ['./word-search-form.component.scss']
})
export class WordSearchFormComponent implements OnInit {
  public words: Word[];

  searchForm: FormGroup;

  languages = Object.values(Language);

  empty = false;

  constructor(private wordService: WordService) {

  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchWord: new FormControl('', Validators.minLength(2) ),
      language: new FormControl(Language.EST)
    });
  }

  onSubmit(): void {
    console.log(this.searchForm.value.searchWord, this.searchForm.value.language);
    this.wordService
      .searchWords(this.searchForm.value.searchWord, this.searchForm.value.language)
      .subscribe(words => {
      this.words = words;

      this.empty = this.words.length === 0;
    });
  }

  get searchWord(): AbstractControl {
    return this.searchForm.get('searchForm');
  }
}

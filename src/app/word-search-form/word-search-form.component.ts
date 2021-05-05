import { Component, OnInit } from '@angular/core';
import {Language} from '../model/Language';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {WordService} from '../service/word.service';
import {Word} from '../model/Word';

@Component({
  selector: 'app-word-search-form',
  templateUrl: './word-search-form.component.html',
  styleUrls: ['./word-search-form.component.scss']
})
export class WordSearchFormComponent implements OnInit {
  public words: Word[];

  languages = Object.values(Language);

  searchForm = new FormGroup({
    searchWord: new FormControl('', [Validators.required]),
    language: new FormControl(null)
  });

  constructor(private wordService: WordService) {

  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.wordService.searchWords(this.searchForm.value.searchWord, this.searchForm.value.language).subscribe(words => {
      this.words = words;
    });
  }
}

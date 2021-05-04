import { Component, OnInit } from '@angular/core';
import {Language} from '../model/Language';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {WordService} from '../service/word.service';
import {Word} from '../model/Word';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-word-search-form',
  templateUrl: './word-search-form.component.html',
  styleUrls: ['./word-search-form.component.scss']
})
export class WordSearchFormComponent implements OnInit {
  public words: Word[];
  // page = 1;
  // pageSize = 4;
  // collectionSize = words.length;

  languages = Object.values(Language);

  searchForm = new FormGroup({
    searchWord: new FormControl('', [Validators.required]),
    language: new FormControl(null, [Validators.required])
  });

  constructor(private wordService: WordService) {
    // this.refreshWords();
  }

  ngOnInit(): void {

  }

  onSubmit(): void{
    this.wordService.searchWords(this.searchForm.value.searchWord, this.searchForm.value.language).subscribe(words => {
      this.words = words;
    });
  }

  // refreshWords(): void {
  //   this.words = words
  //     .map((word, i) => ({id: i + 1, ...word}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }
}

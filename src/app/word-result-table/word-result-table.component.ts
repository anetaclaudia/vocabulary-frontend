import { Component, OnInit } from '@angular/core';
import {Word} from '../model/Word';

const words: Word[] = [
  {
    wordInEstonian: 'tulp',
    wordDefinitionInEstonian: 'lill',
    wordInEnglish: 'tulip',
    wordDefinitionInEnglish: 'flower'
  }
];

@Component({
  selector: 'app-word-result-table',
  templateUrl: './word-result-table.component.html',
  styleUrls: ['./word-result-table.component.scss']
})
export class WordResultTableComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = words.length;
  words: Word[];

  constructor() {
    this.refreshWords();
  }

  ngOnInit(): void {
  }

  refreshWords(): void {
    this.words = words
      .map((word, i) => ({id: i + 1, ...word}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}

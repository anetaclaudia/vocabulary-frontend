import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Word} from '../model/Word';

@Injectable({
  providedIn: 'root'
})
export class WordService{
  private url = 'api/words';

  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(
    private http: HttpClient) {
  }

  /** GET words from the server with search term and chosen language, i.e. /words?word=test&language=EST */
  getWords(word: string): Observable<Word[]>{
    if (!word.trim()){
      // if not search term, return empty array
      return of([]);
    }
    return this.http.get<Word[]>(this.url);
  }

  /** POST - add a new word to the server */
  addWord(word: Word): Observable<Word>{
    return this.http.post<Word>(this.url, word, this.httpOptions);
  }
}

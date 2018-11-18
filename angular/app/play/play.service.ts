import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlayService {
  constructor(private http: Http) { }

  requestStart(): Observable<any> {

    return this.http.get('http://127.0.0.1:8000/hangman/play/')
              .map(
                response => {
                  return response.json();
                }
              )
              .catch(
                error => {
                  console.log('アクセスに失敗しました。');
                  return Observable.throw(error.statusText);
                }
              );
  }


  requestAns(correct: string, st_status: string, score: string, ans: string, question_id: string): Observable<any> {
    let params = new URLSearchParams();
    params.set('correct', correct);
    params.set('string', st_status);
    params.set('score', score);
    params.set('ans', ans);
    params.set('question_id', question_id);
    return this.http.post('http://127.0.0.1:8000/hangman/play/', params)
              .map(
                response => {
                  return response.json();
                }
              )
              .catch(
                error => {
                  console.log('アクセスに失敗しました。');
                  return Observable.throw(error.statusText);
                }
              );
  }

  requestVote(question_id: string, vote: boolean): Observable<any> {
    let params = new URLSearchParams();
    params.set('question_id', question_id);
    if (vote) params.set('vote', 'vote');

    return this.http.post('http://127.0.0.1:8000/hangman/vote/', params)
              .map(
                response => {
                  return response.json();
                }
              )
              .catch(
                error => {
                  console.log('アクセスに失敗しました。');
                  return Observable.throw(error.statusText);
                }
              );
  }
  
}
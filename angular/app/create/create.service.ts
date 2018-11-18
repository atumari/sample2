import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreateService {
  constructor(private http: Http) { }

  requestAdmin(name: string, password: string): Observable<any> {
    let params = new URLSearchParams();
    params.set('name', name);
    params.set('password', password);
    return this.http.post('http://127.0.0.1:8000/hangman/admin/', params)
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

  requestRegist(name: string, password: string): Observable<any> {
    let params = new URLSearchParams();
    params.set('name', name);
    params.set('password', password);
    return this.http.post('http://127.0.0.1:8000/hangman/register/', params)
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

  requestQuestion(name: string, correct: string): Observable<any> {
    let params = new URLSearchParams();
    params.set('name', name);
    params.set('correct', correct);
    return this.http.post('http://127.0.0.1:8000/hangman/create/', params)
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
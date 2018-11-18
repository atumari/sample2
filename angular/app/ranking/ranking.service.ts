import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RankingService {
  constructor(private http: Http) { }

  requestGet(): Observable<any> {      
    return this.http.get('http://127.0.0.1:8000/hangman/ranking/')
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
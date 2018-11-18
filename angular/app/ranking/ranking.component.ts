import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from './author';
import { RankingService } from './ranking.service';

@Component({
  selector: 'my-rank',
  providers: [ RankingService ],
  template: `
    <table align="center">
      <tr>
        <th>ランク</th>
        <th>名前</th>
        <th>ポイント</th>
        <th>作問数</th>
        <th>参加日</th>
      </tr>
      <tr *ngFor="let auth of authors | slice: start: start + len; index as i;">
        <td>{{i+1+start}}</td>
        <td>{{auth.name}}</td>
        <td>{{auth.point}}</td>
        <td>{{auth.num_questions}}</td>
        <td>{{auth.register_date}}</td>
      </tr>
    </table>
    <ul class="pagination">
      <li *ngFor="let a of pages; index as i;">
        <a href="#!" (click)="pager(i)">{{i+1}} </a>
      </li>
    </ul>
    <p><a href="#!" (click)="onclick0()">トップに戻る</a></p>
    
  `,
  styles: [`
    table {
      margin:10px;
      font-size: 14pt;
    }
    
    table tr th{
      background-color: #009;
      color: white;
      padding: 2px 10px;
      border-width:2px;
    }
    
    table tr td {
      background-color: #eee;
      color: #666;
      padding: 2px 10px;
      border-width:2px;
    }

    ul li {
      display: inline-block;
      font-size: 20pt;
      color: rgb(31, 235, 208);
      padding: 7px;    
    }

    p {
      color: rgb(31, 235, 208);
      font-size: 20pt;
    }
  `]
})

export class RankingComponent implements OnInit { 
  start = 0;
  len = 10;
  authors: Author[] = [];
  pages: number[] = [];
  constructor(private rank: RankingService) {}

  ngOnInit() {
    this.rank.requestGet()
    .subscribe(
      data => {
        let result: Author[] = [];
        data.forEach(function(value: any) {
          let author = new Author();
          author.name = value.name;
          author.point = value.point;
          author.num_questions = value.num_questions;
          author.register_date = value.register_date;
          result.push(author);
        });
        this.authors = result;
        for (let i = 0; i < result.length; i++) {
          if (i % this.len == 0) this.pages.push(1);
        }
      },
      error => {
        console.log('アクセスに失敗しました。');
      }
    );
  }

  pager(i: number) {
    this.start = this.len * i;
  }

  @Output() clicked = new EventEmitter<string>();

  onclick0() {
    this.clicked.emit("index");
  }
}
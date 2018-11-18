import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayService } from './play.service';

@Component({
  selector: 'my-play',
  providers: [ PlayService ],
  template: `
  　<p>{{st_status}}</p>
    <form *ngIf="score<6&&correct!=st_status" #answerForm="ngForm" (ngSubmit)="request_ans(ans)" >
      <label for="ans">答え: </label>
      <input id="ans" name="ans" type="text" [(ngModel)]="ans" 
        required maxlength="1"  />
      <input type="submit" value="答える" [disabled]="answerForm.invalid" />
    </form>
    <span *ngIf="score>=6">ゲームオーバー</span>

    <div *ngIf="correct==st_status">
      <span>おめでとう！クリア</span><br>
      <form #voteForm="ngForm" (ngSubmit)="request_vote()">
        <label style="margin-left: 100px;">
          <input type="checkbox" name="vote" [(ngModel)]="vote" />投票する
        </label>
        <input type="submit" value="送信" />
      </form>
    </div>

    <div style="position:absolute; top:100px; left:600px;">
      <my-hangman [score]="score"></my-hangman>
    </div>

    <div style="position:absolute; top:700px; left:40px;">
      <a href="#!" (click)="onclick0()">トップに戻る</a>
    </div>
  `,
  styles: [`
    p {
      margin-left: 100px;
      color: white;
      font-size: 60pt;
    }

    a {
      color: rgb(31, 235, 208);
      font-size: 20pt;
    }

    label {
      margin-left: 40px;
      color: white;
      font-size: 20pt;
    }

    span {
      margin-left: 60px;
      color: white;
      font-size: 30pt;
      }
  `]
})

export class PlayComponent implements OnInit {
  correct = "";
  st_status = "";
  question_id = "";
  score = "0";
  ans = "";
  vote = false;

  constructor(private play: PlayService) {}

  ngOnInit() {
    this.play.requestStart()
    .subscribe(
      data => {
        this.correct = data.correct;
        this.st_status = data.string;
        this.question_id = data.question_id;
      },
      error => {
        console.log('アクセスに失敗しました。');
      }
    );
  }

  request_ans(ans: string) {
    this.play.requestAns(this.correct, this.st_status, this.score, ans, this.question_id)
    .subscribe(
      data => {
        this.correct = data.correct;
        this.st_status = data.string;
        this.question_id = data.question_id;
        this.score = data.score;
        this.ans = "";
      },
      error => {
        console.log('アクセスに失敗しました。');
      }
    );
  }


  @Output() clicked = new EventEmitter<string>();

  onclick0() {
    this.clicked.emit("index");
  }

  request_vote() {
    this.play.requestVote(this.question_id, this.vote)
    .subscribe(
      data => {
        this.clicked.emit("index");
      },
      error => {
        console.log('アクセスに失敗しました。');
      }
    );
  }
}
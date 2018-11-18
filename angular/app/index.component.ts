import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-index',
  template: `
    <div>
      <p><a href="#!" (click)="onclick1()">プレイ</a></p>
      <p><a href="#!" (click)="onclick2()">問題作成</a></p>
      <p><a href="#!" (click)="onclick3()">ランキング</a></p>
    </div>
  `,
  styles: [`
    a {
      color: rgb(31, 235, 208);
      font-size: 30pt;
      margin:35px;
    }
    p {
      margin:35px;
    }`
  ]
})

export class IndexComponent  { 
  @Output() clicked = new EventEmitter<string>();

  onclick1() {
    this.clicked.emit("play");
  }

  onclick2() {
    this.clicked.emit("create");
  }

  onclick3() {
    this.clicked.emit("rank");
  }
}
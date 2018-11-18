import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateService } from './create.service';


@Component({
  selector: 'my-admin',
  providers: [ CreateService ],
  template: `
    <div>
      <p align="center">問題を作るには作者の登録が必要です。</p>
      <form #adminForm="ngForm" (ngSubmit)="request_adm(name, password)" >
        <table align=center>
        <tr>
        <td>
          <label for="name">名前: </label>
        </td>
        <td>
          <input id="name" name="name" type="text" [(ngModel)]="name" 
            required maxlength="50"  />
        </td>
        </tr>
        <tr>
        <td>
          <label for="password">パスワード: </label>
        </td>
        <td>
          <input id="password" name="password" type="text" [(ngModel)]="password"
            required maxlength="50" />
        </td>
        </tr> 
        </table>
        <div align=center>
          <input type="submit" value="認証" [disabled]="adminForm.invalid" />
        </div>
      </form>
      <div align=center>
        <p>{{msg}}</p>
      </div>
      <div align=center>
        <p><a href="#!" (click)="onclick_reg()">新規登録</a></p>
      </div>
    </div>
  `,
  styles: [`
    p {
      margin:35px;
      color: white;
      font-size: 15pt;
    }

    label {
      color: white;
    }
    `
    
  ]
})

export class AdminComponent  {
  name = "";
  password = "";
  msg = "";
  
  @Output() submited = new EventEmitter<string>();

  constructor(private create: CreateService) {}
  request_adm(name: string, password: string) {
    this.create.requestAdmin(name, password)
    .subscribe(
      data => {
        this.submited.emit(this.name);
      },
      error => {
        console.log('アクセスに失敗しました。');
        this.msg = "名前とパスワードが一致しません。";
      }
    );
  };

  @Output() clicked = new EventEmitter<string>();

  onclick_reg() {
    this.clicked.emit("register");
  }
}
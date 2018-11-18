import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CreateService } from './create.service';

@Component({
  selector: 'my-register',
  providers: [ CreateService ],
  template: `
  <p align="center">作者を登録します。</p>
  <form #adminForm="ngForm" (ngSubmit)="request_reg(name, password)" >
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
      <input type="submit" value="登録" [disabled]="adminForm.invalid" />
    </div>
  </form>
  <div align=center>
    <p>{{msg}}</p>
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
  `]
})

export class RegisterComponent {
    name = "";
    password = "";
    msg = "";

    @Output() submited = new EventEmitter<string>();

    constructor(private create: CreateService) {}
    request_reg(name: string, password: string) {
      this.create.requestRegist(name, password)
      .subscribe(
        data => {
            console.log('アクセスに成功しました。');
            this.submited.emit(this.name);
        },
        error => {
          console.log('アクセスに失敗しました。');
          this.msg = "その名前は既に使われています。";
        }
      );
    };
  
    @Output() clicked = new EventEmitter<string>();
  
    onclick_reg() {
      this.clicked.emit("register");
    }
}
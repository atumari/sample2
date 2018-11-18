import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CreateService } from './create.service';


@Component({
  selector: 'my-question',
  providers: [ CreateService ],
  template: `
    <div *ngIf="!success">
      <p align="center">問題は5文字から10文字の間で作れます。</p>
      <form #adminForm="ngForm" (ngSubmit)="request_qes(name, correct)" >
        <table align=center>
        <tr>
        <td>
          <label for="correct">問題: </label>
        </td>
        <td>
          <input id="correct" name="correct" type="text" [(ngModel)]="correct" 
            required maxlength="10" minlength="5" />
        </td>
        </tr> 
        </table>
        <div align=center>
          <input type="submit" value="作成" [disabled]="adminForm.invalid" />
        </div>
      </form>
      <div align=center>
        <p>{{msg}}</p>
      </div>
    </div>
    <div *ngIf="success">
      <p align="center">問題の作成が完了しました。</p>
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

export class QuestionComponent {
  @Input() name: string;
  msg = "";
  success = false;
  
  @Output() submited = new EventEmitter<string>();

  constructor(private create: CreateService) {}
  request_qes(name: string, password: string) {
    this.create.requestQuestion(name, password)
    .subscribe(
      data => {
        this.submited.emit(this.name);
        this.success = true;
      },
      error => {
        console.log('アクセスに失敗しました。');
        this.msg = "その問題は既に存在します。";
      }
    );
  };

  @Output() clicked = new EventEmitter<string>();

  onclick_reg() {
    this.clicked.emit("register");
  }
}
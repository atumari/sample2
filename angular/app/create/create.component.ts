import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'my-create',
  providers: [ CreateService ],
  template: `
    <my-admin *ngIf="create_status=='admin'" (clicked)="chage_st($event)" 
      (submited)="set_name($event)"></my-admin>

    <my-register *ngIf="create_status=='register'" (clicked)="chage_st($event)" 
      (submited)="set_name($event)"></my-register>

    <my-question *ngIf="create_status=='question'" [name]="name" (clicked)="chage_st($event)" 
      (submited)="set_name($event)"></my-question>

    <div style="position:absolute; top:400px; left:40px;">
      <p><a href="#!" (click)="onclick0()">トップに戻る</a></p>
    </div>
  `,
  styles: [`
    p {
      color: rgb(31, 235, 208);
      font-size: 20pt;
    }
  `]
})

export class CreateComponent  {
  create_status = "admin";
  name = "";
  chage_st(st: string, ) {
    this.create_status = st;
  }

  set_name(name: string) {
      this.name = name;
      this.create_status = "question";
  }

  @Output() clicked = new EventEmitter<string>();

  onclick0() {
    this.clicked.emit("index");
  }
}
import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>HangMan</h1>
      <hr>
    </div>

    <my-index *ngIf="view_status=='index'" (clicked)="chage_st($event)"></my-index>

    <my-bg *ngIf="view_status=='index'" (clicked)="chage_st($event)"></my-bg>

    <my-play *ngIf="view_status=='play'" (clicked)="chage_st($event)"></my-play>

    <my-create *ngIf="view_status=='create'" (clicked)="chage_st($event)"></my-create>

    <my-rank *ngIf="view_status=='rank'" (clicked)="chage_st($event)"></my-rank>

    `,
    styles: [
      `h1 {
        color: rgb(146, 7, 30);
        font-size: 90pt;
        margin-top: -20px;
        margin-bottom: 0px;
        text-align: right;
      }`
    ]
})

export class AppComponent  { 
  
  view_status = "index";

  chage_st(st: string) {
    this.view_status = st;
  }
}

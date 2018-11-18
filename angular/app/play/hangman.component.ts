import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-hangman',
  template: `
<div [ngSwitch]="score">
<pre *ngSwitchCase="0">
______________
│     │      \\ 
│
│
│
│
│
│
┴-------------
</pre>

<pre *ngSwitchCase="1">
______________
│     │      \\ 
│ 　　〇
│
│
│
│
│
┴-------------
</pre>

<pre *ngSwitchCase="2">
______________
│     │      \\ 
│ 　　〇
│     │
│     │
│
│
│
┴-------------
</pre>

<pre *ngSwitchCase="3">
______________
│     │      \\ 
│ 　　〇
│     ┼─---
│     │
│
│
│
┴-------------
</pre>

<pre *ngSwitchCase="4">
______________
│     │      \\ 
│ 　　〇
│ ---─┼─---
│     │
│
│
│
┴-------------
</pre>

<pre *ngSwitchCase="5">
______________
│     │      \\ 
│ 　　〇
│ ---─┼─---
│     │
│　 　/
│  　/ 
│
┴-------------
</pre>

<pre *ngSwitchCase="6">
______________
│     │      \\ 
│ 　　〇
│ ---─┼─---
│     │　
│　 　/\\　
│  　/  \\ 
│
┴-------------
</pre>
  `,
  styles: [`
    pre {
      color:rgb(225, 0, 0);
      font-size: 45pt;
      font-weight: bold;
      text-align: left;
    }`
  ]
})

export class HangmanComponent  { 
    @Input() score: string;

  }
import { NgModule }      from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { HangmanComponent } from './hangman.component';



@NgModule({
  imports:      [ CommonModule, FormsModule, HttpModule ],
  declarations: [ PlayComponent, HangmanComponent ],
  exports:    [ PlayComponent, HangmanComponent ]
})
export class PlayModule { }
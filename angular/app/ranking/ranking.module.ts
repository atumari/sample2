import { NgModule }      from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';


@NgModule({
  imports:      [ CommonModule, FormsModule, HttpModule ],
  declarations: [ RankingComponent ],
  exports:    [ RankingComponent ]
})
export class RankingModule { }
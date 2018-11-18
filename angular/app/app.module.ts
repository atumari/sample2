import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { JsonpModule, HttpModule } from '@angular/http'; 
import { AppComponent }  from './app.component';
import { IndexComponent } from './index.component'
import { BackgroundComponent } from './background.component'
import { PlayModule } from './play/play.module';
import { CreateModule } from './create/create.module';
import { RankingModule } from './ranking/ranking.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, JsonpModule, HttpModule, PlayModule, CreateModule, RankingModule ],
  declarations: [ AppComponent, IndexComponent, BackgroundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

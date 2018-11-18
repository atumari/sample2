import { NgModule }      from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './create.component';
import { QuestionComponent } from './question.component';
import { RegisterComponent } from './register.component';



@NgModule({
  imports:      [ CommonModule, FormsModule, HttpModule ],
  declarations: [ AdminComponent, CreateComponent, QuestionComponent, RegisterComponent ],
  exports:    [ AdminComponent, CreateComponent, QuestionComponent, RegisterComponent ]
})
export class CreateModule { }
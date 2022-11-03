import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRegisterComponent } from './book-register.component';
import {InputTextModule} from 'primeng/inputtext';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    BookRegisterComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    MessageService
  ]
})
export class BookRegisterModule { }

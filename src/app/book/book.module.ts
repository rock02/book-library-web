import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing.module';
import { BookRegisterComponent } from './register/book-register/book-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TreeSelectModule } from 'primeng/treeselect';
import { FooterComponent } from '../footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { DataViewModule } from 'primeng/dataview';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [BookComponent, BookRegisterComponent, FooterComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    TableModule,
    TreeSelectModule,
    ButtonModule,
    ReactiveFormsModule,
    MessagesModule,
    DataViewModule,
    ImageModule,
    DropdownModule,
    RatingModule,
    FileUploadModule,
    HttpClientModule,
    InputNumberModule
  ]
})
export class BookModule { }

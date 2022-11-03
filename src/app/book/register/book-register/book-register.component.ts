import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../server/book';
import { BookService } from '../../server/book.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.scss'],
  providers: [MessageService]
})
export class BookRegisterComponent implements OnInit {

  public book: Book = new Book();
  public categories!: { data: string; label: string; }[];
  public category!: { data: string; label: string; };
  public parameterValue!: string;
  public msgs: any = [];
  public currentFileUpload: File | null = null;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.categories = [
      { data: "COMEDY", label: "Comédia" },
      { data: "HORROR", label: "Terror" },
      { data: "ACTION", label: "Ação" },
      { data: "ADVENTURE", label: "Aventura" },
      { data: "DRAMA", label: "Drama" }
    ]

    this.activatedRoute.params.subscribe((p => {
      this.parameterValue = p['id']
    }));

    if (this.parameterValue) {
      this.bookService.getBook(this.parameterValue).subscribe(response => {
        this.book = response;
        this.category = this.categories.find((category) => this.book.category == category.label)!;
      })
    }

  }
  onClickSave() {
    this.book.category = this.category.data;
    if (this.parameterValue) {
      this.bookService.updateBook(this.parameterValue, this.currentFileUpload!, this.book).subscribe(
        response => {
          this.show({ severity: 'success', summary: 'Info Message', detail: 'Livro atualizado com sucesso!' });        
          setTimeout(() => {
            this.onClickBack()
          }, 1000);
        }
      )
    } else {
      this.bookService.postBook(this.currentFileUpload!, this.book).subscribe(
        response => {
          this.show({ severity: 'success', summary: 'Info Message', detail: 'Cadastro realizado com sucesso!' })
          setTimeout(() => {
            this.onClickBack()
          }, 500);
        }
      )
    }
  }
  onClickBack() {
    this.router.navigate(['book'])
  }

  show(msg: {severity:string, summary:string, detail:string}) {
    this.msgs = [msg]
  }

  hide() {
      this.msgs = [];
  }
  myUploader(event: any) {
    console.log(event.currentFiles[0]);
    this.currentFileUpload = event.currentFiles[0];

    

    // console.log(this.currentFileUpload );
    // console.log(typeof this.currentFileUpload);
    // console.log(event)
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from './server/book';
import { BookService } from './server/book.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public books: Book[] = [];
  public responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  constructor(private bookService: BookService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getBooks().subscribe(
      response => {
        this.books = response;
      }
    )
  }
  ondelete(id: string) {
    this.bookService.deleteBook(id).subscribe(
      response => {
        alert("Livro deletado com sucesso");
        this.getBooks();
      }
    )
  }
}

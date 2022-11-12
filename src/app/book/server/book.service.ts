import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookByCategory } from './book-by-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "http://localhost:9090/books";
  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(this.url);
  }

  public postBook(file: File, book: Book): Observable<Book> {
    let formParams = new FormData();
    formParams.append('file', file);

    Object.entries(book).forEach((b) => {
      formParams.append(b[0], b[1]);
    })

    return this.http.post<Book>(this.url, formParams);
  }

  public getBook(id: string): Observable<Book> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
      "AllowedHeaders": ["*"],
    })

    return this.http.get<Book>(this.url + "/" + id, { headers: headers });
  }

  public updateBook(id: string, file: File, book: Book): Observable<Book> {

    let formParams = new FormData();
    formParams.append('file', file);

    Object.entries(book).forEach((b) => {
      formParams.append(b[0], b[1]);
    })

    return this.http.patch<Book>(this.url + "/" + id, formParams);
  }

  public deleteBook(id: string): Observable<Book> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
    })

    return this.http.delete<Book>(this.url + "/" + id, { headers: headers });
  }

  public getBooksByCategories(): Observable<BookByCategory[]> {

    return this.http.get<BookByCategory[]>(this.url + "/categories");
  }

}

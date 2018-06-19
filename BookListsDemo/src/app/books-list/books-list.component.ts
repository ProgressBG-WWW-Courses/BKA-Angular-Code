import { Component, OnInit } from '@angular/core';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-books-list',
  template: `
    <ul>
      <li *ngFor="let book of books">
      {{book.author}} - {{book.title}} [{{book.price}}]
      </li>
    </ul>
  `,
  styles: []
})
export class BooksListComponent implements OnInit {
  books = [];

  constructor(private _booksService: BooksService) { }

  ngOnInit() {
    this._booksService.fetchBooks()
      .subscribe( data => this.books = data );
  }

}

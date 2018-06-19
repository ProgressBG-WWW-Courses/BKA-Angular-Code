import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  template: `
    <h2>The BookList</h2>
    <ul>
      <li *ngFor="let book of books; let i = index" [attr.data-index]="i">
        <span>{{book.title}}.</span>
      </li>
    </ul>
  `,
  styles: []
})
export class BooksListComponent implements OnInit {
  books = [];

  constructor(private _booksService:BooksService) { }

  ngOnInit() {
    this._booksService.fetchBooks()
      .subscribe( data=> this.books = data)
  }

}

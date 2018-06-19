import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-books-list',
  template: `
    <h2>The BookList</h2>
    <ul>
      <li *ngFor="let book of books; let i = index" [attr.data-index]="i">
        <span>{{book.author}}</span> - <span>{{book.title}}</span> [<span>{{book.price}}</span>]
      </li>
    </ul>
  `,
  styles: []
})
export class BooksListComponent implements OnInit {
  books = [];

  compareByPrice(a,b) {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  }

  constructor(private _booksService:BooksService) { }

  ngOnInit() {
    this._booksService.fetchBooks()
      .pipe(map(things => things.sort(this.compareByPrice)))
      .subscribe( data=> this.books = data)
  }
}

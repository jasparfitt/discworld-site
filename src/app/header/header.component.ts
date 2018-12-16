import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../book'
import { BookService } from '../book.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
S
}

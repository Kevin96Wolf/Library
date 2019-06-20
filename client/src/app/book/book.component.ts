import { Component, OnInit } from '@angular/core';
import { Book } from '../validators/book/book'
import { BookCategory } from '../validators/book/bookCategory'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:BookCategory[]
  constructor() { }

  ngOnInit() {

  }
  
  refreshBooks(ev){
    this.books=ev;

  }

}

import { Component, OnInit, Input, Inject } from '@angular/core';
import { Category } from '../validators/category/category'
import { Book } from '../validators/book/book'
import { User } from '../validators/user/user'

import { BookCategory } from '../validators/book/bookCategory'
import { LibraryService } from '../services/services.service';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-show-modify-book',
  templateUrl: './show-modify-book.component.html',
  styleUrls: ['./show-modify-book.component.css']
})
export class ShowModifyBookComponent implements OnInit {
  //Required to refresh  all books
  @Input() public books: BookCategory[]
  //Required to refresh paginated
  @Input() public booksFind: BookCategory[];
  //Represent actual book
  bookCategory: BookCategory = { name: "", author: "", category_id: 1, id: 1, publishDate: "", state: 1, urlImage: "", category: { name: "", description: "", id: 1 }, users: [{ name: "", id: 0, cellphone: "", email: "" }] }
  //Represent book in modal
  modalBook: Book = { name: "", author: "", category_id: 1, id: 1, publishDate: "", state: 0, urlImage: "" }
  modalCategory = { id: "", name: "pick" }
  modalUrl = ""
  //Represent changes of modify
  dat = new Date();
  date = { day: this.dat.getDate() + 9, month: this.dat.getMonth() + 1, year: this.dat.getFullYear() };
  //Data for search
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  //Required refresh input finder
  closeResult: string;
  //Required to show or hide modal
  public modal = true
  enableModal = 1
  constructor(private service: LibraryService) { }
  //Get all books and set in paginated
  ngOnInit() {
    var url = "get-book"
    this.service.serviceGet(url).subscribe(
      (books: BookCategory[]) => {
        console.log(books)
        this.books = books
        this.booksFind = books

        for (let i = 0; i < this.books.length; i++) {
          this.options.push(this.books[i].name);
        }
        //filteredOptions

        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );


      },
      err => {
        alert("Try again")
      }
    );
  }
  //Event to match each book found
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.booksFind = [];


    for (let i = 0; i < this.books.length; i++) {

      if (this.books[i].name.toLowerCase().includes(value)) {
        this.booksFind.push(this.books[i])
      }
    }
    return this.options.filter(option => option.toLowerCase().includes(filterValue));

  }
  closeModal() {
    //Adjusto to see the webpage wid scroll
    document.body.style.overflow = '';
    this.modal = true;
    this.ngOnInit()
  }
  //Item reperents each book once this method is called pass the book
  //with the user and book to modal , modas has componet :add_user
  //add_book
  modalData(item) {
    //Adjust to simulate modal itwas necessary 'cause the filter with BT doesn't work
    document.body.style.overflow = 'hidden';
    var dates = new Date(item.publishDate)
    this.date = { day: dates.getDate(), month: dates.getMonth(), year: dates.getFullYear() };
    this.modal = false;

    this.bookCategory = item;
    //This is necessary for ngfor problems
    if (item.users.length == 0) {
      this.bookCategory.users = [{ name: "", id: 0, cellphone: "", email: "" }]
    }

    this.modalUrl = item.urlImage
    this.modalCategory.name = "(" + item.category.name + ")"
    this.modalCategory.id = item.id
    this.ngOnInit()
  }
  delete(item) {
    var url = "delete-book"
    this.service.servicePut(item, url).subscribe(
      (borrowed) => {
        this.ngOnInit()
      },
      err => {
        alert("Try again")
      }
    );

  }
}

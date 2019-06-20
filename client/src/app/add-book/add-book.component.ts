import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '../validators/category/category'
import { Book } from '../validators/book/book'
import { User } from '../validators/user/user'
import { BookCategory } from '../validators/book/bookCategory'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LibraryService } from '../services/services.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
//IMAGE CONFIG
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  //Requirements to search
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  //----category:Category
  categories: Category[]
  //to set date
  dat = new Date();
  //set new style to see user information
  col12 = "col-md-12 mx-auto shadow-lg p-4 mb-4 bg-white ejemplo"
  book: Book = { name: "", author: "", category_id: 1, id: 1, publishDate: "", state: 0, urlImage: "" }
  //All data from show-modify-book
  @Input() public date = { day: this.dat.getDate() + 9, month: this.dat.getMonth() + 1, year: this.dat.getFullYear() };
  @Input() public bookCategory: BookCategory = { name: "", author: "", category_id: 1, id: 0, publishDate: "", state: 0, urlImage: "", category: { name: "", description: "", id: 1 }, users: [{ name: "", id: 0, cellphone: "", email: "" }] }
  @Input() public modalCategory = { id: "", name: "pick" }
  @Input() url: string;
  //Required to show user information
  @Input() public enableModal = 0
  @Output() refreshBooks = new EventEmitter();
  private validator: FormGroup;
  selectedFile: ImageSnippet;

  constructor(private service: LibraryService) {

  }

  ngOnInit() {

    this.validator = new FormGroup({
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
    //GET CATEGORIES SERVICE
    var url = "get-category"
    this.service.serviceGet(url).subscribe(
      (categories: Category[]) => {

        this.categories = categories
        console.log(this.categories)
        //set all names of categories
        for (let i = 0; i < this.categories.length; i++) {
          this.options.push(this.categories[i].name);
        }
        //filteredOptions
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
        //filteredOptions
      },
      err => {
        console.log(err)
      }
    );
  }
  //Set the category correspond to search
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name.toLowerCase() == filterValue) {
        this.bookCategory.category_id = this.categories[i].id;

      }
    }
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  //Save loral image and object image to post before
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      var reader = new FileReader();
      this.url = event.target.result;

    }
  }

  //First condition represents new book
  //Else represents update book
  register() {
    if (this.bookCategory.id == 0) {
      let url = "store-book"
      this.bookCategory.publishDate = this.date.year + "-" + this.date.month + "-" + this.date.day


      this.service.postImage(this.selectedFile.file, this.bookCategory, url).subscribe(
        (res) => {
          this.refreshBooks.emit(res)
        },
        (err) => {
          alert("Try again")
        })
    }
    else {
      var url = "modify-book"
      this.bookCategory.publishDate = this.date.year + "-" + this.date.month + "-" + this.date.day
      this.service.servicePut(this.bookCategory, url).subscribe(
        (res) => {
          this.refreshBooks.emit(res)
        },
        err => {
          alert("Try again")
        }
      );
    }
  }

  //This represents output from add user when a book is
  //borrowes o returned  , and sent all books
  //to show-modify-book
  stateChange(ev) {

    console.log(ev)
    var url = "get-book"
    this.service.serviceGet(url).subscribe(
      (books) => {
        console.log(books)


        this.refreshBooks.emit(ev)

        console.log(books)

      },
      err => {
        console.log(err)
      }
    );

  }
}

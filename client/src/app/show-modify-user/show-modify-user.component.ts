
import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../validators/category/category'
import { Book } from '../validators/book/book'
import { User } from '../validators/user/user'
import { UserBook } from '../validators/user/userBook'
import { BookCategory } from '../validators/book/bookCategory'
import { LibraryService } from '../services/services.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-show-modify-user',
  templateUrl: './show-modify-user.component.html',
  styleUrls: ['./show-modify-user.component.css', '../show-modify-book/show-modify-book.component.css']
})
export class ShowModifyUserComponent implements OnInit {
  @Input() public booksFind: UserBook[];
  @Input() public books: BookCategory[]
  @Input() users: UserBook[]

  //used to see the borrowed books
  modalUser: UserBook = { id: 0, name: "", email: "", cellphone: "", books: [{ name: "", author: "", category_id: 1, id: 1, publishDate: "", state: 1, urlImage: "", category: { name: "", description: "", id: 1 }, users: [{ name: "", id: 0, cellphone: "", email: "" }] }] }
  //Used by filters
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  //controls modal
  public modal = true
  enableModal = 1
  constructor(private service: LibraryService) { }
  ngOnInit() {
    var url = "get-user"
    this.service.serviceGet(url).subscribe(
      (users: UserBook[]) => {
        console.log(users)
        this.users = users
        this.booksFind = users

        for (let i = 0; i < this.users.length; i++) {
          this.options.push(this.users[i].name);
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
  // find users
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.booksFind = [];


    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].name.toLowerCase().includes(value)) {
        this.booksFind.push(this.users[i])
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
  modalData(item) {
    //Adjust to simulate modal itwas necessary 'cause the filter with BT doesn't work
    document.body.style.overflow = 'hidden';
    this.modalUser = item

    this.modal = false;
  }

  //return book
  returned(item) {
    var url = "store-user-returned-book"

    var data = { idU: this.modalUser.id, idB: item.id }
    this.service.servicePost(data, url).subscribe(
      (borrowed) => {
        document.body.style.overflow = '';
        this.modal = true
        this.ngOnInit()


      },
      err => {
        alert("Try again")

      }
    );

  }
  //delete user
  delete(item) {
    var url = "delete-user"
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

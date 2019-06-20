import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '../validators/category/category'
import { User } from '../validators/user/user'
import { BookCategory } from '../validators/book/bookCategory'
import { Categories } from '../validators/category/categories'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LibraryService } from '../services/services.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  value = ""
  myControl = new FormControl();
  private validator: FormGroup;
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  category: Category
  categories: Category[]
  users: User[]
  user: User = { id: 0, name: "", email: "", cellphone: "" }
  @Input() public bookCategory: BookCategory = { name: "", author: "", category_id: 1, id: 1, publishDate: "", state: 0, urlImage: "", category: { name: "", description: "", id: 1 }, users: [{ name: "", id: 0, cellphone: "", email: "" }] }
  constructor(private service: LibraryService, private router: Router) { }
  @Output() stateChange = new EventEmitter();
  @Output() newUser = new EventEmitter();
  ngOnInit() {
    this.validator = new FormGroup({
      name: new FormControl('', Validators.required),

      email: new FormControl('', Validators.required),
      cellphone: new FormControl('', Validators.required),

    });
    var url = "get-user"

    this.service.serviceGet(url).subscribe(
      (users: User[]) => {
        this.users = users

        console.log(this.users)
        //set all names of users
        this.options=[];
        for (let i = 0; i < this.users.length; i++) {
          this.options.push(this.users[i].name);
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
        alert("Erease and try again")
      }
    );
  }
  //Filter each user
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name.toLowerCase() == filterValue) {
        console.log(this.users[i])

        this.bookCategory.users[0] = this.users[i]

      }
    }
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  //Create new user or new user with borroweb book
  register() {
    var url = "store-user"
    var url2 = "store-user-borrowed-book"
    if (this.router.url == '/add-book' || this.router.url == '/show-book') {

      this.service.servicePost(this.user, url).subscribe(
        (user) => {
          var data = { idU: user.id, idB: this.bookCategory.id }

          this.service.servicePost(data, url2).subscribe(
            (borrowed) => {
              this.bookCategory = borrowed;
              this.newUser.emit("")
              this.stateChange.emit("")
              this.value = ""
                this.ngOnInit();
            },
            err => {
            alert("Erease and try again")
            }
          );

        },
        err => {
        alert("Erease and try again")
        }
      );
    } else {

      this.service.servicePost(this.user, url).subscribe(
        (user) => {
          //refresh books and user list
          this.newUser.emit("")
          this.stateChange.emit("")
            this.ngOnInit();

        },
        err => {
          alert("Erease and try again")
        }
      );
    }

  }
  //Reprents a book is borrowed
  borrow() {
    var url = "store-user-borrowed-book"
    var data = { idU: this.bookCategory.users[0].id, idB: this.bookCategory.id }
    this.service.servicePost(data, url).subscribe(
      (borrowed) => {

        this.bookCategory = borrowed;
        //refresh books
        this.stateChange.emit("")
        this.value = ""
        this.ngOnInit();
      },
      err => {
        alert("Try again")
      }
    );

  }
  //Represnets if a book was returned
  returned() {
    var url = "store-user-returned-book"
    var data = { idU: this.bookCategory.users[0].id, idB: this.bookCategory.id }
    this.service.servicePost(data, url).subscribe(
      (borrowed) => {
        console.log(borrowed)
        this.bookCategory = borrowed;
        this.bookCategory.users = [{ name: "", id: 0, cellphone: "", email: "" }];
        //refresh books
        this.stateChange.emit("throug")
        this.user = { id: 0, name: "", email: "", cellphone: "" }
        this.ngOnInit()
        this.value = ""


      },
      err => {
          alert("Try again")
      }
    );

  }
}

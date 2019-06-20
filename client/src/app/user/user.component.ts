import { Component, OnInit } from '@angular/core';
import { UserBook } from '../validators/user/userBook'
import { LibraryService } from '../services/services.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  booksFind: UserBook[];
  users: UserBook[];
  constructor(private service: LibraryService) { }

  ngOnInit() {
  }
  //Method to refresh users when one is inserted
  newUser(ev) {
    var url = "get-user"
    this.service.serviceGet(url).subscribe(
      (users: UserBook[]) => {

        this.users = users
        this.booksFind = users

      },
      err => {
        console.log(err)
      }
    );

  }
}

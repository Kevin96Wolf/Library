import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Booleans for logic menu
  hover: boolean = false;
  hover2: boolean = false;
  hover3: boolean = false;
  menu: boolean = true;
  //required to fix one problem with responsive
  nav: boolean = true;
  //Booleans for logic submenu
  submenu: boolean = true;
  submenu2: boolean = true;
  submenu3: boolean = true;

  constructor() { }
  option(option) {

    if (option == 1) {
      this.hover = true;
      this.hover2 = false;
      this.hover3 = false;
      this.submenu = true;

    }
    if (option == 2) {
      this.hover2 = true;
      this.hover = false;
      this.hover3 = false;
      this.submenu2 = true;

    }
    if (option == 3) {
      this.hover2 = false;
      this.hover = false;
      this.hover3 = true;
      this.submenu3 = true;


    }

  }



}

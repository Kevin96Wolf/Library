import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
//Helps animation to each selection
hover: boolean=false;
hover2: boolean=false;
hover3: boolean=false;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../validators/category/category'
import { Categories } from '../validators/category/categories'

import { LibraryService } from '../services/services.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-show-modify-category',
  templateUrl: './show-modify-category.component.html',
  styleUrls: ['./show-modify-category.component.css']
})
export class ShowModifyCategoryComponent implements OnInit {
  modalCategory: Category = { name: "", description: "", id: 1 };
  category: Category = { name: "", description: "", id: 1 };
  //refresh categories
  @Input() public categories: Categories[]


  private validator: FormGroup;
  constructor(private service: LibraryService) { }

  ngOnInit() {
    this.validator = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    var url = "get-category"
    this.service.serviceGet(url).subscribe(
      (categories) => {
        this.categories = categories
      },
      err => {
        alert("Try gain")
      }
    );
  }

  delete(item) {
    var url = "delete-category"
    this.service.servicePut(item, url).subscribe(
      (category) => {
        this.categories = category
      },
      err => {
        alert("Try again")
      }
    );
  }
  modalData(item) {
    this.modalCategory = item;

  }
  modify() {
    var url = "modify-category"
    this.service.servicePut(this.modalCategory, url).subscribe(
      (category) => {
        this.categories = category
      },
      err => {
        alert("Try again")
      }
    );

  }
}

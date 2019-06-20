import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../validators/category/category'
import { User } from '../validators/user/user'
import { BookCategory } from '../validators/book/bookCategory'
import { Categories } from '../validators/category/categories'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LibraryService } from '../services/services.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = { name: "", description: "", id: 1 };
  categories: Category[]
  private validator: FormGroup;
  @Output() refreshCategory = new EventEmitter();
  constructor(private service: LibraryService) {
  }

  ngOnInit() {
    this.validator = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }
  //Service to save an category
  register() {
    var url = "store-category"
    this.service.servicePost(this.category, url).subscribe(
      (category: Category) => {

        this.refreshCategory.emit(category)
      },
      err => {
        alert("Erease and try again")
      }
    );
  }

}

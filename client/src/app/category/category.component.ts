import { Component, OnInit } from '@angular/core';
import { Category } from '../validators/category/category'
import { Categories } from '../validators/category/categories'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category = { name: "", description: "", id: 1 };
  categories: Categories;
  constructor() { }

  ngOnInit() {

  }
  refreshCategory(ev) {
    this.categories = ev;
  }
}

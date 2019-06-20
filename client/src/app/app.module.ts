import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { LibraryService} from './services/services.service'
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ShowModifyCategoryComponent } from './show-modify-category/show-modify-category.component'
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowModifyBookComponent } from './show-modify-book/show-modify-book.component';
import {MatDialogModule} from '@angular/material/dialog';

import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { ShowModifyUserComponent } from './show-modify-user/show-modify-user.component';


const routes: Routes = [
      { path: 'add-user', component: UserComponent },
    { path: 'add-book', component: BookComponent },
  { path: '', component: IndexComponent },
    { path: 'add-category', component: CategoryComponent },
    { path: 'show-book', component: ShowModifyBookComponent },
    { path: 'show-user', component: ShowModifyUserComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddUserComponent,
    ShowModifyCategoryComponent,
    BookComponent,
    AddBookComponent,
    ShowModifyBookComponent,
    UserComponent,
    ShowModifyUserComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    NgbModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

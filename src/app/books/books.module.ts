import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { StoreModule } from '@ngrx/store';

import * as fromBooks from './state/books.reducers';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(
      fromBooks.booksFeature.name,
      fromBooks.booksFeature.reducer
    ),
  ],
})
export class BooksModule {}

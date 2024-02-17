import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/books.reducer';
import { BOOKS_STATE_NAME } from './state/books.selectors';

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(BOOKS_STATE_NAME, postsReducer),
  ],
})
export class BooksModule {}

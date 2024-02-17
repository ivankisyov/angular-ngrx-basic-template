import { Book } from 'src/app/shared/models/book.model';

export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: [],
};

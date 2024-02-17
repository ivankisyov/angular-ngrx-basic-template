export class Book {
  title: string;
  description: string;
  id: string;

  constructor(title: string, id: string, description: string) {
    this.title = title;
    this.id = id;
    this.description = description;
  }
}

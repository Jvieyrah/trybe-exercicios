type Book = {
    book: string;
    author: string;
    genre: string;
  }

  class BooksWishlist {
    private wishlist: Book[];
    constructor(book: Book) {
        this.wishlist = [];
        this.wishlist.push(book);
    }

    public addBook(newBook: Book): void {
        this.wishlist.push(newBook);
    }

    public showWishlist(): void {
        console.log(this.wishlist);
    }
  }

  const wishlist = new BooksWishlist({
    book: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Dystopia',
  });
  wishlist.addBook({
    book: 'Misery',
    author: 'Stephen King',
    genre: 'Thriller',
  });
  wishlist.showWishlist();
  
  export default BooksWishlist;
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// //Destructing
// const book = getBook(2);

// //Object Destructing
// const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
//   book;
// console.log(title, author, pages, genres);

// //Array Destructing
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

// //Rest Operator
// const [firstGenre, secondGenre, ...otherGenre] = genres;
// console.log(firstGenre, secondGenre, otherGenre);

// //Spread Operator
// //adding value
// const updatedBooks = [...genres, "Epic-Fantasy"];
// updatedBooks;

// //Creating a new Data using spread Operator
// const movieDate = { ...book, moviePublicationDate: "2002-2-12" };
// console.log(movieDate);

// //Overiding pages.
// const updatedPages = { ...book, pages: 2002 };
// console.log(updatedPages);

// //Arrow Function
// const getYear = (str) => str.split("-")[0];

// //Template Literals
// const summary = `${title}, ${pages}-pages long book, was written by ${author} and published on ${getYear(
//   publicationDate
// )}. This Book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
// summary;

// //Ternary Operator
// const pagesRange = pages > 1000 ? "Over a Thousand" : "Less than Thousand";
// pagesRange;

// //Short-Circuiting in Logical Operator
// console.log(true && "Duck");
// console.log(false && "Duck");
// console.log(true || "Duck");
// console.log(false || "Duck");
// console.log(0 ?? "Duck");
// console.log(null ?? "Duck");

// //Optional Chaining
// const totalReviewsCount = (book) => {
//   const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
//   goodReads;
//   libraryThing;
//   return goodReads + libraryThing;
// };

// console.log(totalReviewsCount(book));

// const totalReviewsCount = (book) => {
//   const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodReads + libraryThing;
// };

// const books = getBooks();

// //Map Method
// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//     reviewsCount: totalReviewsCount(book),
//   };
// });
// essentialData;

// //Filter Method
// const longBooksWithMovie = books.filter(
//   (book) => book.pages > 500 && book.hasMovieAdaptation
// );
// longBooksWithMovie;

// const adventureBook = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBook;

// //Reduce Method ***most versatile and most powerful
// const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
// totalPages;

// //Sort Method
// const arr = [3, 7, 1, 9, 6];
// const sortedArr = arr.slice().sort((a, b) => a - b);
// sortedArr;

// const sortedByPages = books
//   .slice()
//   .sort((a, b) => a.pages - b.pages)
//   .map((book) => ({ title: book.title, pages: book.pages }));
// sortedByPages;
// books;

// //Working with Immutable Arrays;

// const newBook = { id: 6, title: "Duckys", author: "Ayush Pakhrin", pages: 225 };

// //adding
// const addingBook = [...books, newBook];
// addingBook;

// //deleting
// const deletingBook = addingBook.filter((book) => book.id !== 3);
// deletingBook;

// //updating
// const updatingBook = deletingBook.map((book) =>
//   book.id === 1 ? { ...book, title: "Duck pt1" } : book
// );
// updatingBook;

//Asynchrous javascript
//Promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//async/Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("Duck");

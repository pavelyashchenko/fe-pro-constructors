import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */

 export function Book(title, year, publicationBy, authors) {
  this.title = title;
  this.year = year;
  this.publicationBy = publicationBy;
  this.authors = authors;
  publicationBy.myBooks.push(this);
  authors.forEach((author) => {
    author.books.push(this);
  });
  this.likedUsers = [];

  Object.defineProperty(this, 'suggestedBooks', {
    get() {
      return this.authors
        .reduce((accum, author) => {
          const publicators = author.books.map((book) => book);
          const uniqueBooks = new Set(publicators);
          return [...uniqueBooks];
        }, [])
        .filter((book) => book !== this)
        .map(({ title }) => title)
        .join(', ');
    },
  });

  Object.defineProperty(this, 'suggestedPublicators', {
    get() {
      return this.authors
        .reduce((accum, author) => {
          const publicators = author.books.map((book) => book.publicationBy);
          const uniquePublicators = new Set(publicators);
          return [...uniquePublicators];
        }, [])
        .filter((publicator) => publicator !== this.publicationBy)
        .map(({ name }) => name)
        .join(', ');
    },
  });
}

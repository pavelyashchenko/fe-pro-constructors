import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} dateOfBirth
 * @constructor
 * @property {string} name
 * @property {Date} dateOfBirth
 * @property {Book[]} books
 */

 export function Author(name, dateOfBirth) {
  this.name = name;
  this.books = [];
  this.dateOfBirth = dateOfBirth;
}

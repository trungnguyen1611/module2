"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var thuchanh2_1 = require("./thuchanh2");
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.delete = function (id) {
        var _this = this;
        this.books.forEach(function (book, index) {
            if (book.id == id) {
                _this.books.splice(index, 1);
            }
        });
    };
    BookManager.prototype.update = function (id, name) {
        var book = new thuchanh2_1.Book(id, name);
        this.books.push(book);
    };
    return BookManager;
}());
exports.BookManager = BookManager;

import {Book} from "./thuchanh2";

export class BookManager {
    books: Book[]=[];

    constructor() {
        this.books=[];
    }
    add(book:Book):void{
        this.books.push(book);
    }
    getList():Book[]{
        return this.books;
    }
    delete(id: string):void{
        this.books.forEach((book,index)=>{
            if(book.id==id){
                this.books.splice(index,1);
            }
        })
    }
    update(id:string,name:string):void{
        let book=new Book(id,name);
        this.books.push(book);
    }
}

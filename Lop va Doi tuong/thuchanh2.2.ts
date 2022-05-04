import {Book} from "./thuchanh2";
import {BookManager} from "./thuchanh2.1";

let book1=new Book('B001','Lap trinh JAVA');
let book2=new Book('B002','Lap trinh PHP');
let book3=new Book('B003','Lap trinh TypeScript');

let bookManager=new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
console.log(bookManager.getList());
bookManager.delete('B002');
bookManager.update('B004','Lap trinh JavaScript');
console.log(bookManager.getList());

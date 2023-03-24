import { Book } from "./books"

export class Library {

    private books : Book[]
    private address : string
    private manager : string

    constructor(books:Book[],address:string,manager:string){

        this.books = books
        this.address = address
        this.manager = manager


    }

    setAddress(address:string){

        this.address = address

    }

    setManager(manager:string){

        this.manager = manager

    }

    getAddress():string{

        return this.address

    }

    getManager():string{

        return this.manager
    }

    toString(){

        for (let i = 0; i < this.books.length; i++){

            let libros = this.books[i]
            console.log("Book" + [i+1] + "\n" + "Title - " + libros.getTitle() + "\n" + "Number of Pages - " + libros.getNpages() + "\n" + "ISBN - " + libros.getIsbn() + "\n" + "Author - " + libros.getAuthor() + "\n" + "Editorial - " + libros.getEditorial() + "\n")
        }

    }

    getNumberOfBooks():number{

        return this.books.length

    }

    findByAuthor(author:string):Book[]{

        let arrayAutores:Book[] = []
        
        for (let i = 0; i < this.books.length; i++){

            if(this.books[i].getAuthor() === author){

                arrayAutores.push(this.books[i])

            }
        }

        return arrayAutores
    }

}

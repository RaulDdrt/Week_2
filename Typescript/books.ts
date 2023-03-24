export class Book{

    private title : string;
    private nPages : number;
    private isbn : string;
    private author : string;
    private editorial : string;

    constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){

        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial

    }

    getTitle():string{
        
        return this.title
    }

    getNpages():number{

        return this.nPages

    }

    getIsbn():string{

        return this.isbn

    }

    getAuthor():string{

        return this.author

    }

    getEditorial():string{

        return this.editorial

    }

    setTittle(title:string){

        this.title = title

    }

    setNpages(nPages:number){

        this.nPages = nPages

    }

    setIsbn(isbn:string){

        this.isbn = isbn

    }

    setAuthor(author:string){

        this.author = author;

    }

    setEditorial(editorial:string){

        this.editorial = editorial

    }

    toString():string{

        return "Title - " + this.title + "\n" + "Number of Pages - " + this.nPages + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial + "\n"

    }

}
import { Library } from "./library";
import { Book } from "./books";

let dragonlance = new Book ("El Retorno de los dragones", 528, "9788448032609", "Margaret Weis y Tracy Hickman", "Timmun Mas")
let dragonlance2 = new Book ("La Tumba de Huma", 600, "9788448032610", "Margaret Weis y Tracy Hickman", "Timmun Mas")
let nietzsche = new Book ("Asi hablo Zaratustra", 300, "9788448032620", "Friedrich Nietzsche", "Ernst Schmeitzner")

let arraylibros = [dragonlance, dragonlance2, nietzsche]


let library1 = new Library (arraylibros,"C/ De la piruleta", "Pedro")


library1.setAddress("C/ jijijaja")
library1.setManager("ITS WAS ME, DIO")
console.log(library1.findByAuthor("Margaret Weis y Tracy Hickman"))
console.log(library1.getAddress())
console.log(library1.getManager())
console.log(library1.getNumberOfBooks())
library1.toString()

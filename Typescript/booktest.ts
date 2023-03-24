import { Book } from "./books";

let dragonlance = new Book ("El Retorno de los dragones", 528, "9788448032609", "Margaret Weis y Tracy Hickman", "Timmun Mas")

console.log(dragonlance.getAuthor())
console.log(dragonlance.getEditorial())
console.log(dragonlance.getIsbn())
console.log(dragonlance.getNpages())
console.log(dragonlance.getTitle())
dragonlance.setAuthor("Margaret Weis y Tracy Hickman")
dragonlance.setEditorial("Timmun Mas")
dragonlance.setIsbn("9788448032609")
dragonlance.setNpages(528)
dragonlance.setTittle("El Retorno de los dragones")

let libro1 = dragonlance.toString()

console.log(libro1)
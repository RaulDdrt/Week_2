import { Contacts } from "./contacts";
import { Person } from "./person";

let contacto1 = new Contacts ()

let persona1 = new Person ("Raquel", 25, "C/ Algo")
let persona2 = new Person ("David", 62, "Av Santa Cruz")
let persona3 = new Person ("Pedro", 7, "C/ Pizarro")

let contactos = [persona1, persona2, persona3]

contacto1.people = contactos 

contacto1.printCalendar()
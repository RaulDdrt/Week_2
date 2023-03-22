const Contacts = require("./contacts")
const Person = require("./person")

let persona1 = new Person (1.50, 50, 1991)
let contactos = new Contacts()

contactos.arrayvac.push(persona1)

console.log(contactos.printPerson())
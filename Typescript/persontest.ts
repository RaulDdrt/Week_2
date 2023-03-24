import { Person } from "./person";

let persona1 = new Person ("Raul", 30, "C/ Lomo")


console.log(persona1.name)
console.log(persona1.age)
persona1.setAddress("C/ Holi")
console.log(persona1.getAddress())
console.log(persona1.yearOfBirth(2023))
console.log(persona1.printName())

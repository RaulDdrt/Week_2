var person = /** @class */ (function () {
    function person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    person.prototype.printName = function () {
        return this.name;
    };
    return person;
}());
var persona1 = new person("Juan", 33, "C/ Canarias");
console.log(persona1);

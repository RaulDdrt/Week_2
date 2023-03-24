export class Person

{

    public name: string;
    public age: number;
    private address: string;

    constructor(nombre:string, age:number, address:string){

        this.name = nombre;
        this.age = age;
        this.address = address
    
    }

    printName():string{

        return this.name
    }

    yearOfBirth(currentYear:number):number{

        return currentYear - this.age
    }

    setAddress(address:string):void{

        this.address = address

    }

    getAddress():string{

        return this.address
    }

    

}
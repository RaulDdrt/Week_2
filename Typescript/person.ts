class person

{

    name : string;
    age : number;
    private address : string;



constructor(name:string, age:number, address:string)

{

    this.name = name
    this.age = age
    this.address = address

}

printName(){

    return this.name
}

}


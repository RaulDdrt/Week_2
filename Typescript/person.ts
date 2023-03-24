class Person

{

    public name : string;
    public age : number;
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

yearOfBirth(currentYear:number):number{

    return currentYear - this.age

}



setAddress(address:string){

    return this.address = address

}

getAddress():string{

    return this.address


}

}
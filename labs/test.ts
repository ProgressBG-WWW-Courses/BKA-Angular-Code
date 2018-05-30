let x = 2;

function foo(x:number, name?:string) {
    console.log(x);
    console.log(name);
}

foo(3);


class Person {
    firstName;
    surName;

    constructor(firstName: string, surName: string) {
        // no need for: this.firstName = firstName
        this.name = `${this.firstName} ${this.surName}`
    }
}
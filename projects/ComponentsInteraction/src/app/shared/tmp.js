class DiselEngine{
    constructor(name){
        this.name = name;
        this.start = false;
    }
}
class HybridEngine{
    constructor(name){
        this.name = name;
        this.start = false;
        
    }
}
class Car{
    // here we "inject" an engine object in order ot build our Car objects
    constructor(color, year, engine){
        this.color = color;
        this.year = year;
        this.engine = engine
        // this.start = this.start
    }
    start(){
        this.engine.start = true;
        console.log(`The ${this.color} car was started with ${this.engine.name} engine!`)
    }
}

diselEngine = new DiselEngine("disel")
hybridEngine = new HybridEngine("hybrid")


let car1 = new Car("yellow", 2003, diselEngine);
let car2 = new Car("green", 2018, hybridEngine);

console.log( car1 )
console.log( car2 )

car1.start()
car2.start()
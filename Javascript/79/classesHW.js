class Vehicle {

    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    go() {
        console.log(`Now going at speed ${this.speed}`);
    }

    print() {
        console.log(`The ${this.color} vehicle is going at speed ${this.speed}`);
    }
}

const car = new Vehicle('white', '57');

console.log(car);
car.go();
car.print();

class Plane extends Vehicle {
    constructor(color, speed) {
        super(color, speed);
    }

    print() {
        console.log(`The ${this.color} plane is flying at speed ${this.speed}`);
    }
}

const plane = new Plane('Black', '450');
console.log(plane);
plane.go();
plane.print();

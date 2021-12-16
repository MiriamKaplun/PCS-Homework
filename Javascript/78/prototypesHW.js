'use strict';

function Vehicle(color, speed) {
    this.color = color;
    this.speed = speed;

    Vehicle.prototype.go = function () {
        console.log(`Now going at speed ${this.speed}`);
    };
    Vehicle.prototype.print = function () {
        console.log(`The ${this.color} vehicle is going at speed ${this.speed}`);
    };
}

const car = new Vehicle('red', 32);
console.log(car);
car.go();
car.print();

function Plane(color, speed) {
    Vehicle.call(this, color, speed);
}

//Plane.prototype = Object.create(Vehicle.prototype);

Plane.prototype.go = function () {
    console.log(`Now flying at speed ${this.speed}`);
};

Plane.prototype.print = function () {
    console.log(`The ${this.color} vehicle is flying at speed ${this.speed}`);
};

const plane = new Plane('yellow', 100);
console.log(plane);
plane.go();
plane.print();
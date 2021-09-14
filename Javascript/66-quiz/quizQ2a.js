window.app = (function () {
    'use strict';

    // why a function returning a function? (inside the IIFE)
    function counter() {
        // SL - why do we need an initValue? why not just set currentValue directly?
        let initValue = 1; // SL - why not 0? nobody incremented yet...
        let currentValue = initValue;

        // SL - just wondering, given what you doing here any particular reason do use this style as opposed to usual "function increment() {}"
        let increment = function () {
            currentValue += 1;
            console.log('currentValue = ' + currentValue);
        };

        return increment;
    }

    // SL - way to complicated here... so incrementCounter calls counter which is a function that returns a function so incrementCounter is that returned function...
    let incrementCounter = counter();

    // SL - and why are we calling it here? Why would we want to increment the counter when creating it?
    incrementCounter();

}(window.app || {}));
// SL - this file sets window.app to undefined as the IIFE doesnt return anything...
// SL - is this supposed to be the first counter?




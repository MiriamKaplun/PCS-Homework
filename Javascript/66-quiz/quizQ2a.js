window.app = (function () {
    'use strict';

    function counter() {

        let initValue = 1;
        let currentValue = initValue;

        let increment = function () {
            currentValue += 1;
            console.log('currentValue = ' + currentValue);
        };

        return increment;
    }

    let incrementCounter = counter();

    incrementCounter();

}(window.app || {}));




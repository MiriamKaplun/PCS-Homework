window.app = (function () {
    'use strict';

    function counter() {

        let initValue = 0;
        let currentValue = initValue;

        let increment10 = function () {
            currentValue += 10;
            console.log('currentValue = ' + currentValue);
        };

        return increment10;
    }

    let incrementCounter = counter();

    incrementCounter();

}(window.app || {}));
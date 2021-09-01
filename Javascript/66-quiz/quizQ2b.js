window.app = (function () {
    'use strict';

    function counter() {

        let initValue = 0;
        let currentValue = initValue;

        let increment5 = function () {
            currentValue += 5;
            console.log('currentValue = ' + currentValue);
        };

        return increment5;
    }

    let incrementCounter = counter();

    incrementCounter();

}(window.app || {}));
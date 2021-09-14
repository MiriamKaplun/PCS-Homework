// SL - most comments from quizQ2a.js apply to this file as well
window.app = (function () {
    'use strict';

    // SL - all this is just a really complicated way of console.logging 5... really not much different (aside from lots of extra complexity) from console.log(5)
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

// SL - is this supposed to be the second counter?
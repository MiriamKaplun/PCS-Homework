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
// SL - this file also sets window.app to undefined as the IIFE doesnt return anything...

// SL - Not really seeing a 3rd file using the other 2 - creating counters, incrementing, printing out counts - that I asked for

// SL - Not 100% sure if you misunderstood the questions... If your feeling like your not understanding as well as you need to, please let me know. Making sure you can do earlier homeworks - including Java basic programing ones (and rewatching how it was done in class if unable to complete) might be a good idea as well..
(function () {
    'use strict';

    let yrs;
    let rate;

    function setRate(r) {
        r = rate;
    }

    function setYears(y) {
        y = yrs;
    }

    function calculateInterest(amount) {
        let interest = (amount * rate) * yrs;
        return interest;
    }

    setYears(5);
    setRate('.01');
    console.log(calculateInterest(1000));
}());
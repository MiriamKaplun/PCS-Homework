(function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDayName(index) {
        return days[index];
    }

    function getDayIndex(day) {
        return (days.findIndex(d => d === day)) + 1;
    }

    console.log(getDayName(1));
    console.log(getDayIndex('Wednesday'));


    ////////////////////


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

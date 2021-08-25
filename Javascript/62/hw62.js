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

}());

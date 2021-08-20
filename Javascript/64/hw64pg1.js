window.myApp = window.myApp || {};

window.myApp.utils = (function (theModule) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];

    theModule.getDayIndex = (day) => (days.indexOf(day)) + 1;

    theModule.getDay = (index) => days[index - 1];

    return theModule;
}(window.myApp.utils || {}));


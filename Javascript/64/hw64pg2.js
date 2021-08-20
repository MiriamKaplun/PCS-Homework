window.myApp = window.myApp || {};

window.myApp.utils = (function (theModule) {
    'use strict';

    theModule.stringCaseInsensitiveEquals = (string1, string2) => (string1.toLowerCase() === string2.toLowerCase());

    return theModule;
}(window.myApp.utils || {}));
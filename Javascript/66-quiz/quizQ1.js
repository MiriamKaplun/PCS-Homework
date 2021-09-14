(function () {
    'use strict';

    let numbers = [2, 4, 6];

    function myMap(theArray, test) {
        let result = [];
        for (let i = 0; i < theArray.length; i++) {
            if (theArray[i]) { // SL - Who says "false" elements should be skipped. Maybe they should be mapped to something? (e.g. add a 0 to your array, and result only has 3 elements, not 4...). It would be the mappings function job to properly handle this case
                result.push(test(theArray[i]));
            }
        }
        return result;
    }

    function double(n) {
        return (n * 2);
    }

    console.log('myMap(numbers, double)', myMap(numbers, double));
    console.log('numbers', numbers);

}());

// SL - nice
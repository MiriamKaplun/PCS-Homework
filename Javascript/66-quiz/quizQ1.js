(function () {
    'use strict';

    let numbers = [2, 4, 6];

    function myMap(theArray, test) {
        let result = [];
        for (let i = 0; i < theArray.length; i++) {
            if (theArray[i]) {
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
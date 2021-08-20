'use strict';

let letters = ['a', 'B', 'c'];

function myEvery(theArray, test) {
    theArray.forEach(v => {
        if (test(v)) {
            return 'true';
        }
    });
}

console.log(myEvery(letters, letters === letters.toUpperCase()));


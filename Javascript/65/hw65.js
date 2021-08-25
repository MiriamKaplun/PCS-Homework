(function () {
    'use strict';

    function get(id) {
        console.log('getting elem', id);
        return document.getElementById(id);
    }

    const startButton = get('start');
    const stopButton = get('stop');

    const bgColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
    const textColors = ['white', 'purple', 'red', 'pink', 'orange', 'yellow', 'green'];


    let i = 0;
    let j = 0;
    function setColor() {
        document.body.style.backgroundColor = bgColors[i];
        i = i === bgColors.length ? 0 : i + 1;
        document.body.style.color = textColors[j];
        j = j === bgColors.length ? 0 : j + 1;
    }

    let theIntervalId;
    startButton.addEventListener('click', () => {
        if (!theIntervalId) {
            setColor();
            theIntervalId = setInterval(setColor, 1000);
        }
    });

    stopButton.addEventListener('click', () => {
        clearInterval(theIntervalId);
        theIntervalId = undefined;
    });
}());
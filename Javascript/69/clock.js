window.pcs = window.pcs || {};

window.pcs.clock = (function () {
    'use strict';

    const clock = document.getElementById("time");

    setInterval(function () { clock.innerText = new Date().toLocaleTimeString(); }, 1000);

}());
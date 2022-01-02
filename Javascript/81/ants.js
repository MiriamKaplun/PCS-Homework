(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');

    const context = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    const antSize = 3;
    let timescalled = 0;

    class Ant {
        constructor(color) {
            this.color = color;

            this.x = (canvas.width / 2);
            this.y = (canvas.height / 2);
            this.dx = getRandomNumber(1, -1);
            this.dy = getRandomNumber(1, -1);
        }

        draw() {
            timescalled++;

            if (timescalled > 100) {
                this.dx = getRandomNumber(1, -1);
                this.dy = getRandomNumber(1, -1);
                timescalled = 0;
            } else {
                this.x += this.dx;
                this.y += this.dy;
            }

            if (this.y < antSize || this.y > canvas.height - antSize) {
                this.dy = -this.dy;
            }

            if (this.x < antSize || this.x > canvas.width - antSize) {
                this.dx = -this.dx;
            }

            context.fillStyle = this.color;
            context.beginPath();
            context.fillRect(this.x, this.y, antSize, antSize);
            context.fill();
        }
    }

    const ants = [];

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.draw());
    }, 100);

    const antColorInput = document.getElementById('color');
    const antAmountInput = document.getElementById('amount');

    document.getElementById('addAnts').addEventListener('submit', e => {
        e.preventDefault();
        for (let i = 0; i < antAmountInput.value; i++) {
            ants.push(new Ant(antColorInput.value));
        }
    });
}());
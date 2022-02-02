(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');

  const THING_SIZE = 64;

  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const crashSound = document.getElementById('crash');
  const crunchSound = document.getElementById('crunch');

  let gameOver = false;
  let score = 0;
  let speed = 500;

  class Snake {
    constructor() {
      this.snakeParts = [{ x: 0, y: 0 }];
      //this.x = 0;
      //this.y = 0;
      this.direction = 'ArrowRight';

      document.addEventListener('keydown', event => {
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            this.direction = event.key;
        }
      });

      this.draw();
    }

    draw() {
      //context.drawImage(snakeHead, this.snakeParts[0].x, this.snakeParts[0].y, THING_SIZE, THING_SIZE);
      for (let i = 0; i < this.snakeParts.length; i++) {
        context.drawImage(snakeHead, this.snakeParts[i].x, this.snakeParts[i].y, THING_SIZE, THING_SIZE);
      }
    }

    move() {
      let x = this.snakeParts[0].x;
      let y = this.snakeParts[0].y;

      switch (this.direction) {
        case 'ArrowRight':
          x += THING_SIZE;
          break;
        case 'ArrowLeft':
          x -= THING_SIZE;
          break;
        case 'ArrowUp':
          y -= THING_SIZE;
          break;
        case 'ArrowDown':
          y += THING_SIZE;
          break;
      }

      if (x < 0 || x > canvas.width - THING_SIZE || y < 0 || y > canvas.height - THING_SIZE || 
        this.snakeParts.find((e, i) => e.x === this.snakeParts[0].x && e.y === this.snakeParts[0].y && i !== 0)) {
        gameOver = true;
      } else {  
        let p = this.snakeParts.pop();
        this.snakeParts.unshift(p);
        this.snakeParts[0].x = x;
        this.snakeParts[0].y = y;
      }
    

      if (this.snakeParts[0].x === apple.x && this.snakeParts[0].y === apple.y) {
        score++;
        speed = speed * 0.9;
        crunchSound.currentTime = 0;
        crunchSound.play();
        apple.move();
        this.snakeParts.push({ x: this.snakeParts[0].x - THING_SIZE, y: this.snakeParts[0].y });
      }

      this.draw();
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    draw() {
      context.drawImage(appleImg, this.x, this.y, THING_SIZE, THING_SIZE);
    }

    move() {
      this.x = this.getRandomNumber(0, canvas.width - 1);//THING_SIZE);
      this.y = this.getRandomNumber(0, canvas.height - 1);//THING_SIZE);
      this.draw();
    }

    getRandomNumber(min, max) {
      let r = Math.floor(Math.random() * (max - min + 1)) + min;
      r = r - r % THING_SIZE;
      return r;
    }
  }

  let snake;
  let apple;

  function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = 'bold 30px Arial';
    context.fillText(`Score: ${score}`, canvas.width - 160, 40);

    snake.move();
    apple.draw();

    if (!gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      context.font = 'bold 30px Arial';
      context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
      crashSound.currentTime = 0; // in case it was playing
      crashSound.play();
    }
  }

  const snakeHead = new Image();
  snakeHead.src = 'images/snakehead.png';
  snakeHead.onload = () => {
    snake = new Snake();
    setTimeout(gameLoop, speed);
  };

  const appleImg = new Image();
  appleImg.src = 'images/redapple.png';
  appleImg.onload = () => {
    apple = new Apple();
  };
}());


//00xxxxxxxxxx00
//000xxxxxxxxxx0

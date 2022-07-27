const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 480; // setting the width of canvas
    this.canvas.height = 270; // setting the height of canvas
    this.context = this.canvas.getContext('2d'); // setting the @D context of canvas
    document.body.insertBefore(this.canvas, document.body.childNodes[0]); // injecting <canvas> before <script>
    this.interval = setInterval(updateGameArea, 50); // call updateGameArea every 20ms
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  frames: 0,
};

function updateGameArea() { // responsible updating the Game Area
  myGameArea.clear(); // clear the game area
  player.newPos(); // check for updated player position
  player.update(); //set player's position
  updateObstacles() //
}

function updateObstacles() {
  myGameArea.frames += 1; // increment property frames
  console.log(myGameArea.frames);
  if(myGameArea.frames === 120){
    myGameArea.frames = 0;
  }
}

class Component {
  constructor(width, height, color, x, y) { // defining our Component properties
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x; // initial X position
    this.y = y; // initial Y position
    this.speedX = 0; // controlling the speed on the x axis
    this.speedY = 0; // controlling the speed on the y axis
  }

  // (if this.x < 480 || this.y < 270)

  newPos() {
    this.x += this.speedX; // this.x = this.x + speedX
    this.y += this.speedY; // this.y = this.y + speedY
  }

  update() { // creating a rectangle 
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY -= 1;
      console.log('speedY',player.speedY)
      break;
    case 40: // down arrow
      player.speedY += 1;
      console.log('speedY',player.speedY)
      break;
    case 37: // left arrow
      player.speedX -= 1;
      console.log('speedX',player.speedX)
      break;
    case 39: // right arrow
      player.speedX += 1;
      console.log('speedX',player.speedX)
      break;
  }
});

document.addEventListener('keyup', (e) => { // makes sure the speed goed back 0
  player.speedX = 0;
  player.speedY = 0;
}); 

const player = new Component(30, 30, 'blue', 0, 110); // creating an instance of class Component
myGameArea.start();
// setTimeout(() => console.log('HEllo World 2'), 1000);
// setInterval(() => console.log('HEllo World'), 1000);
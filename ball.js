const can = document.getElementById('canvas').getContext('2d');
const canvas = document.getElementById('canvas');
let width = canvas.width;
let height = canvas.height;

var colors = ['blue', 'pink', 'red', 'skyblue', 'purple'];

function circle(x, y, radius, fillBool){
	can.beginPath();
	can.arc(x, y, radius, 0, Math.PI * 2, false);
	if (fillBool) {
		can.fill();
	}else{
		can.stroke();
	}

}

function Ball(){
	this.x = 100;
	this.y = 100;
	this.ySpeed = Math.random() * 5;
	this.xSpeed =  Math.random() * 5;
	
};

 Ball.prototype.draw = function() {
	circle(this.x, this.y, 10, true);
};

Ball.prototype.move = function(){
	 this.x += this.xSpeed;
	 this.y += this.ySpeed;
}
Ball.prototype.checkCollision = function () {
	if (this.x < 0 || this.x > width) {
		
		this.xSpeed = -this.xSpeed;
	}
	if (this.y < 0 || this.y > height) {
		
	
		this.ySpeed = -this.ySpeed;
	};
	
	 
};
var color = function (){
	var color = Math.floor(Math.random() * colors.length);
	can.fillStyle = colors[color];
	can.strokeStyle = colors[color];
	

}
 var balls = [];
 for (var i = 0; i < 1559; i++) {
 	balls[i] = new Ball();
 }
setInterval(color, 200);
var i = 0;
setInterval(() => {
		can.clearRect(0, 0, width, height);
		can.strokeRect(0, 0, width, height);
		for (var i = 0; i < balls.length; i++) {
			balls[i].checkCollision();
			balls[i].draw();
			balls[i].move();	
		}
		

		
		
	
	
}, 0);
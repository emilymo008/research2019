// tau shift graph
var g1 = function (p) {
	p.preload = function() {
	  // est = loadJSON('assets/est.avg.json');

		taunorm1 = p.loadImage('assets/taunorm1.png');
		taunorm2 = p.loadImage('assets/taunorm2.png');
		taunorm3 = p.loadImage('assets/taunorm3.png');
		taunorm4 = p.loadImage('assets/taunorm4.png');
		taunorm5 = p.loadImage('assets/taunorm5.png');
		taunorm6 = p.loadImage('assets/taunorm6.png');
		taunorm7 = p.loadImage('assets/taunorm7.png');
		taunorm8 = p.loadImage('assets/taunorm8.png');
		taunorm9 = p.loadImage('assets/taunorm9.png');
		taunorm10 = p.loadImage('assets/taunorm10.png');
		taunorm11 = p.loadImage('assets/taunorm11.png');

		taudist1 = p.loadImage('assets/taudist1.png');
		taudist2 = p.loadImage('assets/taudist2.png');
		taudist3 = p.loadImage('assets/taudist3.png');
		taudist4 = p.loadImage('assets/taudist4.png');
		taudist5 = p.loadImage('assets/taudist5.png');
		taudist6 = p.loadImage('assets/taudist6.png');
		taudist7 = p.loadImage('assets/taudist7.png');
		taudist8 = p.loadImage('assets/taudist8.png');
		taudist9 = p.loadImage('assets/taudist9.png');
		taudist10 = p.loadImage('assets/taudist10.png');
		taudist11 = p.loadImage('assets/taudist11.png');

	}


	p.setup = function() {
		// pixelDensity(2);
		// var canvas = createCanvas(800, 300);
		p.createCanvas(800, 300);
		p.noLoop();
	 	// canvas.parent('widget2');

		tnorm = [taunorm1, taunorm2, taunorm3, taunorm4, taunorm5, taunorm6, taunorm7, taunorm8, taunorm9, taunorm10, taunorm11];
		tdist = [taudist1, taudist2, taudist3, taudist4, taudist5, taudist6, taudist7, taudist8, taudist9, taudist10, taudist11];




	}

	// define slide
	function Slider(framex, framey) {
	  this.x = framex; // x and y are the position coords
	  this.y = framey;

	  this.yupbound = this.y + 110;
	  this.ylobound = this.y + 10;

		this.xupgrab = this.x + 50;
	  this.xlograb = this.x + 10;
		this.yupgrab = this.y + 110 + 15; // bounds for grabbing slider
		this.ylograb = this.y + 10 - 15;

	  this.ypos = this.y + 110; // pos of slider

	  this.slideup = 0 // slideup is more for conveniently calculating value of parameter, not for determining position of slider. ypos is for position of slider.
	  this.firstpressbool = false;
	  this.firstpress = 0

		this.mousePressed = function() {
			if(this.xlograb < p.mouseX & p.mouseX < this.xupgrab &
				this.ylograb < p.mouseY & p.mouseY < this.yupgrab) {
				this.firstpressbool = true

				if(this.ylobound < p.mouseY & p.mouseY < this.yupbound) {
					this.slideup = this.yupbound - p.mouseY;
					this.ypos = p.mouseY
				}
				else if (p.mouseY < this.ylobound) {
					this.slideup = 100;
					this.ypos = this.y + 10
				}
				else if (p.mouseY > this.yupbound) {
					this.slideup = 0;
					this.ypos = this.y + 110
				}

			}
		}

		this.mouseReleased = function() {
			this.firstpressbool = false
		}

		this.mouseDragged = function() {
			if(this.firstpressbool == true) {
				if(this.ylobound < p.mouseY & p.mouseY < this.yupbound) {
					this.slideup = this.yupbound - p.mouseY;
					this.ypos = p.mouseY
				}
				else if (p.mouseY < this.ylobound) {
					this.slideup = 100;
					this.ypos = this.y + 10
				}
				else if (p.mouseY > this.yupbound) {
					this.slideup = 0;
					this.ypos = this.y + 110
				}
			}
		}

	  this.display = function() {
	    // frame:
	    p.fill(240, 240, 240, 0);
	    p.strokeWeight(0);
	    p.rect(this.x, this.y, 60, 120 + 3);

	    // line:
	    p.strokeWeight(0);
	    p.fill(210, 210, 210);
	    p.rect(this.x + 30 - 1, this.y + 10, 3, 100 + 3)

	    // knob:
	    p.fill(200, 200, 200, 70);
	    p.strokeWeight(0);
	    p.rect(this.x + 20, this.ypos, 20, 3)
	  }
	}


	var s1 = new Slider(50, 40);

	var shift = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1];

	var incr = 100/(Object.keys(shift).length);

	p.draw = function() {


		p.background(255, 255, 255);
		s1.display();

		p.fill(0,0,0);
		var lvl = p.floor(s1.slideup/incr);
		p.textAlign(p.CENTER);
		p.text('Skew: ' + shift[lvl], 80, 30);
		p.noSmooth()
		p.image(tnorm[lvl], 150, -40, 300, 300);
		p.image(tdist[lvl], 450, -40, 300, 300);




	}

	p.mousePressed = function() {
		s1.mousePressed()
		p.redraw();
	}

	p.mouseReleased = function() {
		s1.mouseReleased()
		p.noLoop();
	}

	p.mouseDragged = function() {
		s1.mouseDragged()
		p.redraw();
	}

}

taudgraphdiv = new p5(g1, 'widget2')















// big graph
var g2 = function (p) {
	p.preload = function() {
		shiftn1 = p.loadImage('assets/shiftn1.png');
		shiftn08 = p.loadImage('assets/shiftn08.png');
		shiftn06 = p.loadImage('assets/shiftn06.png');
		shiftn04 = p.loadImage('assets/shiftn04.png');
		shiftn02 = p.loadImage('assets/shiftn02.png');
		shift0 = p.loadImage('assets/shift0.png');
		shift02 = p.loadImage('assets/shift02.png');
		shift04 = p.loadImage('assets/shift04.png');
		shift06 = p.loadImage('assets/shift06.png');
		shift08 = p.loadImage('assets/shift08.png');
		shift1 = p.loadImage('assets/shift1.png');

		taunorm1 = p.loadImage('assets/taunorm1.png');
		taunorm2 = p.loadImage('assets/taunorm2.png');
		taunorm3 = p.loadImage('assets/taunorm3.png');
		taunorm4 = p.loadImage('assets/taunorm4.png');
		taunorm5 = p.loadImage('assets/taunorm5.png');
		taunorm6 = p.loadImage('assets/taunorm6.png');
		taunorm7 = p.loadImage('assets/taunorm7.png');
		taunorm8 = p.loadImage('assets/taunorm8.png');
		taunorm9 = p.loadImage('assets/taunorm9.png');
		taunorm10 = p.loadImage('assets/taunorm10.png');
		taunorm11 = p.loadImage('assets/taunorm11.png');

		taudist1 = p.loadImage('assets/taudist1.png');
		taudist2 = p.loadImage('assets/taudist2.png');
		taudist3 = p.loadImage('assets/taudist3.png');
		taudist4 = p.loadImage('assets/taudist4.png');
		taudist5 = p.loadImage('assets/taudist5.png');
		taudist6 = p.loadImage('assets/taudist6.png');
		taudist7 = p.loadImage('assets/taudist7.png');
		taudist8 = p.loadImage('assets/taudist8.png');
		taudist9 = p.loadImage('assets/taudist9.png');
		taudist10 = p.loadImage('assets/taudist10.png');
		taudist11 = p.loadImage('assets/taudist11.png');

	}


	p.setup = function() {
		// pixelDensity(2);
		// var canvas = createCanvas(800, 300);
		p.createCanvas(1200, 300);
		p.noLoop();
	 	// canvas.parent('widget2');

		imgs = [shiftn1, shiftn08, shiftn06, shiftn04, shiftn02, shift0, shift02, shift04, shift06, shift08, shift1];
		tnorm = [taunorm1, taunorm2, taunorm3, taunorm4, taunorm5, taunorm6, taunorm7, taunorm8, taunorm9, taunorm10, taunorm11];
		tdist = [taudist1, taudist2, taudist3, taudist4, taudist5, taudist6, taudist7, taudist8, taudist9, taudist10, taudist11];




	}

	// define slide
	function Slider(framex, framey) {
	  this.x = framex; // x and y are the position coords
	  this.y = framey;

	  this.yupbound = this.y + 110;
	  this.ylobound = this.y + 10;

		this.xupgrab = this.x + 50;
	  this.xlograb = this.x + 10;
		this.yupgrab = this.y + 110 + 15; // bounds for grabbing slider
		this.ylograb = this.y + 10 - 15;

	  this.ypos = this.y + 110; // pos of slider

	  this.slideup = 0 // slideup is more for conveniently calculating value of parameter, not for determining position of slider. ypos is for position of slider.
	  this.firstpressbool = false;
	  this.firstpress = 0

		this.mousePressed = function() {
			if(this.xlograb < p.mouseX & p.mouseX < this.xupgrab &
				this.ylograb < p.mouseY & p.mouseY < this.yupgrab) {
				this.firstpressbool = true

				if(this.ylobound < p.mouseY & p.mouseY < this.yupbound) {
					this.slideup = this.yupbound - p.mouseY;
					this.ypos = p.mouseY
				}
				else if (p.mouseY < this.ylobound) {
					this.slideup = 100;
					this.ypos = this.y + 10
				}
				else if (p.mouseY > this.yupbound) {
					this.slideup = 0;
					this.ypos = this.y + 110
				}

			}
		}

		this.mouseReleased = function() {
			this.firstpressbool = false
		}

		this.mouseDragged = function() {
			if(this.firstpressbool == true) {
				if(this.ylobound < p.mouseY & p.mouseY < this.yupbound) {
					this.slideup = this.yupbound - p.mouseY;
					this.ypos = p.mouseY
				}
				else if (p.mouseY < this.ylobound) {
					this.slideup = 100;
					this.ypos = this.y + 10
				}
				else if (p.mouseY > this.yupbound) {
					this.slideup = 0;
					this.ypos = this.y + 110
				}
			}
		}

	  this.display = function() {
	    // frame:
	    p.fill(240, 240, 240, 0);
	    p.strokeWeight(0);
	    p.rect(this.x, this.y, 60, 120 + 3);

	    // line:
	    p.strokeWeight(0);
	    p.fill(210, 210, 210);
	    p.rect(this.x + 30 - 1, this.y + 10, 3, 100 + 3)

	    // knob:
	    p.fill(200, 200, 200, 70);
	    p.strokeWeight(0);
	    p.rect(this.x + 20, this.ypos, 20, 3)
	  }
	}


	var s1 = new Slider(50, 80);

	var shift = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1];

	var incr = 100/(Object.keys(shift).length);

	p.draw = function() {


		p.background(255, 255, 255);
		s1.display();
	
		p.fill(0,0,0);
		var lvl = p.floor(s1.slideup/incr);
		p.textAlign(p.CENTER);
		p.text('Skew: ' + shift[lvl], 80, 70);
		p.noSmooth()
		p.image(imgs[lvl], 150, 30, 400, 240);
		p.image(tnorm[lvl], 550, 0, 300, 300); // 150
		p.image(tdist[lvl], 850, 0, 300, 300); // 450




	}

	p.mousePressed = function() {
		s1.mousePressed()
		p.redraw();
	}

	p.mouseReleased = function() {
		s1.mouseReleased()
		p.noLoop();
	}

	p.mouseDragged = function() {
		s1.mouseDragged()
		p.redraw();
	}

}

taudgraphdiv = new p5(g2, 'widget1')

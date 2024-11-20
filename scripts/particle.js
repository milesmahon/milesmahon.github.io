function Particle() {
  //if (random() < 0.5) {
  //  this.pos = createVector(width, random(height));
  //  this.velocity = createVector(1, 0);
  //} else {
  //  this.pos = createVector(random(width), height);
  //  this.velocity = createVector(0, 1);
  //}

  this.pos = createVector(width / 2, height / 2 - 50);
  this.velocity = p5.Vector.random2D();

  this.acc = p5.Vector.random2D();
  this.max_vel = 6;
  this.color_palette = ["#f08080", "#f4978e", "#f8ad9d", "#fbc4ab"];
  this.c = color(random(this.color_palette));
  this.c.setAlpha(10);
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.updatePrev();
    this.edges();
    this.velocity.add(this.acc);
    this.velocity.limit(this.max_vel);
    this.pos.add(this.velocity);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    stroke(this.c);
    strokeWeight(10);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  };

  this.travel = function (flow_field) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * num_cols;
    var force = flow_field[index];
    this.applyForce(force);
    //if (random() < 0.1) {
    //  var jitter = p5.Vector.random2D();
    //  this.applyForce(jitter);
    //}
  };

  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };

  this.edges = function () {
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    }
    this.updatePrev();
  };
}

var particles;
var flow_field;
var scl;
var num_rows;
var num_cols;
var noiseStrength = 1.6;
//var frame_rate;

function setup() {
  var canvas = createCanvas(windowWidth+10, windowHeight+10);
  canvas.position(0, 0);
  canvas.style("z-index", "1");

  scl = 10; // lower is higher resolution
  var num_particles = 300;
  particles = [];
  //frame_rate = createP('');

  for (var p = 0; p < num_particles; p++) {
    particles[p] = new Particle();
  }

  num_rows = ceil(height / scl);
  num_cols = ceil(width / scl);
  flow_field = new Array(num_rows * num_cols);

  for (var y = 0; y < num_rows; y++) {
    for (var x = 0; x < num_cols; x++) {
      var n1 = noise(x / scl, y / scl) * noiseStrength;
      var v = p5.Vector.fromAngle(n1);
      //v.setMag(random(0, .5));
      flow_field[x + y * num_cols] = v;

      // visualize flow field
      //stroke(255);
      //push();
      //translate(x*scl, y*scl);
      //rotate(v.heading());
      //line(0, 0, scl, 0);
      //pop();

    }
  }
}

function draw() {
  //if (floor(millis() % 1000.0) < 2) {
  //  background(20);
  //}
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].travel(flow_field);
    particles[i].update();
  }
  //frame_rate.html(floor(frameRate()));
}

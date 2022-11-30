// JAVASCRIPT CODE 

// sellect canvas 
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// game vars and consts 
let frames = 0;

// lod sprite image 
const sprite = new Image();
sprite.src = "img"
// draw
function draw() {

}

// update 
function update() {

}

// loop
function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();
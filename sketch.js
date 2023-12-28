var bars = [250, 145, 566, 238, 321, 400, 345, 20, 10, 90, 200, 100, 50, 34, 97, 300, 122, 34, 234, 45, 200, 267, 34, 67, 87, 97, 56, 67, 87, 98, 157, 97];
var ting = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 600; i+=(20)){
    ting.push(i);
  }
}

function drawBar(){
  for (var i = 0; i < ting.length; i++){
    fill(0, 0, 0);
    rect(ting[i], 600-bars[i], 10, bars[i]);
  }
}

function bubbleSort(){
  drawBar();
  for (var i = 0; i < bars.length; i++){
    for (var j = 0; j < bars.length; j++){
      var test = bars[j];
      if (bars[j] > bars[j+1]){
        bars[j] = bars[j+1];
        bars[j+1] = test;
      }
    }
  }
}


function draw() {
  frameRate(1);
  background(220);
  bubbleSort();
}

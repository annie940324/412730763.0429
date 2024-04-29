var captureGraphics
var capture_width=640
var capture_height=480
var span =5
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(320,240);//設定顯示畫面大小
  captureGraphics.scale(-1,1)
  captureGraphics = captureGraphics(capture_width,capture_height)
  captureGraphics=translate(capture_width,0)
  captureGraphics.hide()
}

function draw() {
  background(220);
  noStroke()
  push()
  translate(width/2-capture_width/2, height/2-capture_height) //把原點移到(width/2-160, height/2-120)
  captureGraphics.image(capture,0,0) // 在0,0
  for(var x = 0;x<captureGraphics.width;x=x+span){
    for(var x = 0;y<captureGraphics.height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      rect(x,y,span)
    }
  }
  pop()
}


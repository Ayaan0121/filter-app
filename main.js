//make Moustache x and y var
Moustache_x=0;
Moustache_y= 0;
// make left eye x and y var
glasses_x=0;
glasses_y= 0;

function preload() {
  img= loadImage('https://i.postimg.cc/63f6cJdK/Moustache.png');
  img1= loadImage('https://i.postimg.cc/vH1bKVyD/goggles.png');
  }

function setup(){
  Canvas= createCanvas(500 , 400);
  Canvas.position(515 , 135);
//  Canvas.center();
//video 
video = createCapture(VIDEO);
video.size(500 , 400);
video.hide();
//load posenet model
poseNet=ml5.poseNet(video , modelLoaded);

poseNet.on('pose' , gotPoses);
}

function gotPoses(results) {

if (results.length > 0 ) {
  console.log(results);
  //nose x and y
  console.log("nose x = "+ results[0].pose.nose.x);
  console.log("nose y = "+ results[0].pose.nose.y);
  //left eye x and y 
  console.log("leftEye x = "+ results[0].pose.leftEye.x);
  console.log("leftEye = "+ results[0].pose.leftEye.y);
  //Moustache x and y var
  Moustache_x=results[0].pose.nose.x;
  Moustache_y= results[0].pose.nose.y;
  //left eye x and y var
  glasses_x=results[0].pose.leftEye.x;
  glasses_y= results[0].pose.leftEye.y;
}
}

function modelLoaded() {
console.log('poseNet is initialized.')  
}
function click_snapshot() {
  save('filter.png');
}

function draw() {
image(video , 0 , 0 , 500 , 400);
image(img , Moustache_x - 43  , Moustache_y - 10 , 80 , 55)
image(img1 , glasses_x - 83  , glasses_y - 30 , 120 , 65)
}
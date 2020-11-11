var nose_x =0;
var nose_y =0;
var difference =0 ;
var left_wrist_x =0;
var right_wrist_x =0;
function setup()
{
video = createCapture(VIDEO);
video.size(550,550);

canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('Model is Loaded!');
}
function draw()
{
    textSize(difference);
    text('Druhin',nose_x, nose_y);
  
    
    document.getElementById("square_side").innerHTML="size of the text is "+'<b>'+difference +"px"+'<b>';
    
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x= "+nose_x +"nose y= "+nose_y);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        console.log("left wrist x is"+left_wrist_x);
        console.log("right wrist x is"+right_wrist_x);
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("difference is "+difference);
    }
}
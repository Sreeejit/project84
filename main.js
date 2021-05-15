canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);
var Car1X = 10;
var Car1Y = 10;
var Car2X= 10;
var Car2Y = 100;
var Car1W = 50;
var Car1H = 50;
var Car2W = 50;
var Car2H = 50;
var Car1_img = "car1 (1).png";
var Car2_img = "car1.png";
var canvas_background = "racing.jpg";
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = canvas_background;

car2_imgTag = new Image();
car2_imgTag.onload = uploadCar2;
car2_imgTag.src = Car2_img;

car1_imgTag = new Image();
car1_imgTag.onload = uploadCar1;
car1_imgTag.src = Car1_img;
}


function uploadBackground(){
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);    
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag , Car2X, Car2Y, Car2W, Car2H); 
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag , Car1X, Car1Y, Car1W, Car1H); 
}      
    
function my_keydown(e)
{
 keyPressed = e.keyCode;
 console.log(keyPressed);
    if(keyPressed == '38')
     {
         car1_up();
         console.log("up arrow key") }

         if(keyPressed == '40')
         {
             car1_down();
             console.log("down arrow key") }

             if(keyPressed == '37')
             {
                 car1_left();
                 console.log("left arrow key") }

                 if(keyPressed == '39')
     {
         car1_right();
         console.log("right arrow key") }

         if(keyPressed == '87')
     {
         car2_up();
         console.log("key w") }


        
    














}  


  var colorLoop = 0;
  var colors = ["second1", "second2", "second3","second4"];
  var myDate = new Date();
  var words1 = ["GO", "BULLS"];

  colors[0] = ["#D4001F","#000000","#FFFFFF"];
  colors[1] = ["#000000","#000000","#000000"];
  colors[2] = ["#FFFFFF","#FFFFFF","#FFFFFF"];
  colors[3] = ["#D4001F","#000000","#FFFFFF"];

  //#FFFFFF means white color
  //#000000 means black color

function main() { 
  // alert(colors[0][0]);
  var canvas = document.getElementById('example');  
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  //alert("test1");
  // Get the rendering context for 2DCG
  var context = canvas.getContext('2d');
  // s = myDate.getSeconds();
  //alert(s);

  // sleep(3000);
  s =  myDate.getSeconds();
  //alert(s2);

  //let the code sleep until another new second comes
  while(true){
    var TempDate = new Date();
    ms = TempDate.getMilliseconds();
    // s = s+1;
    if(ms == 0)
      break;
  }

    s = s+1;
    r = s%colors.length;
    //alert(colors.length);
    colorLoop = r;
    // alert(s);
    //  every 1000ms, run the colorChange function
    var interal = setInterval(function () {
        colorChange(context,r);
    }, 1000);
}


function colorChange(context, r) {
  //clear all the screen
   //give color to the paint
   //context.fillStyle = "white";
   //paint the background color
   //context.fillRect(0, 0, 4000, 3000);
   //give color to the paint
   context.clearRect(0, 0, innerWidth, innerHeight);
   var colorLength  =  colors[0].length - 1; 
   var randomMark = getRandomInt(0 , colorLength);
   context.fillStyle = colors[colorLoop][randomMark];
   //draw the block in the middle
   context.fillRect(0, 0, innerWidth, innerHeight);

   //show the words
    if(colorLoop == 1){
    //set the font
    context.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context.fillText(words1[0], innerWidth*0.27, innerHeight*0.57);

    }
    else if(colorLoop == 2){
    //set the font
    context.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context.fillStyle = "#000000";
    //draw the words, and set the positon
    context.fillText(words1[1], innerWidth*0.01, innerHeight*0.57);
    }

   colorLoop = colorLoop + 1;
   if(colorLoop ==colors.length){
    colorLoop =0;
   }      
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function manualColorSet(){
  //function to manually set color
  // preload array of colors
  // draw rectangle with certain color based on how much time has passed
  // how do we get this to work for multiple users? 
  //  should we make an admin page that sets variables and dates? 
}
// function winResize(){
//     var canvas = document.getElementById('example');  
//     canvas.width = innerWidth;

//     canvas.height = innerHeight;
// }

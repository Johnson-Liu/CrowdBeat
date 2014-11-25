  var colorLoop = 0;
  var colors = ["second1", "second2", "second3","second4", "second5","second6","second7","second8","second9","second10","second11","second12"];
  var myDate = new Date();
  var words1 = ["GO", "WILD", "CATS", "GO WILDCATS"];

  colors[0] = ["#110014","#220029", "#33003D","#440052"];
  //colors[0] = ["white","#220029", "#33003D","#440052"];
  colors[1] = ["#33003D","#440052", "#520063","#66007A"];
  colors[2] = ["#520063", "#66007A", "#77008F","#8800A3"];
  colors[3] = ["#77008F", "#8800A3", "#9900B8","#AA00CC"];
  colors[4] = ["#9900B8", "#AA00CC", "#BB00E0","#CC00F5"];
  colors[5] = ["#BB00E0", "#CC00F5", "#D60AFF", "#DA1FFF"];
  colors[6] = ["#D60AFF", "#DA1FFF", "#DD33FF","#E047FF"];
  colors[7] = ["#DD33FF", "#E047FF","#E45CFF","#E770FF"];
  colors[8] = ["#E45CFF", "#E770FF", "#EB85FF", "#EE99FF"];
  colors[9] = ["#EB85FF", "#EE99FF", "#F1ADFF", "#F5C2FF"];
  colors[10] = ["#F1ADFF", "#F5C2FF", "#F8D6FF", "#FCEBFF"];
  //replace the white color
  colors[11] = ["#F5C2FF", "#F8D6FF", "#FCEBFF","#FCEBFF"];

  //#FFFFFF means white color
  //#000000 means black color

function wildmain() { 
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
        colorChange(canvas,context,r);
    }, 1000);
}


function colorChange(canvas,context, r) {
  //clear all the screen
   //give color to the paint
   //context.fillStyle = "white";
   //paint the background color
   //context.fillRect(0, 0, 4000, 3000);
   //give color to the paint
   canvas.width = innerWidth;
   canvas.height = innerHeight;
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
    else if(colorLoop == 3){
    //set the font
    context.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context.fillText(words1[1], innerWidth*0.1, innerHeight*0.57);
    }
    else if(colorLoop == 5){
    //set the font
    context.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context.fillText(words1[2],innerWidth*0.1, innerHeight*0.57);
    }
    else if(colorLoop == 8){
    //set the font
    context.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context.fillText(words1[0],innerWidth*0.27,innerHeight*0.25);
    context.fillText(words1[1],innerWidth*0.1,innerHeight*0.5);
    context.fillText(words1[2],innerWidth*0.1,innerHeight*0.75);
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
 function winResize(){
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
        colorChange(canvas,context,r);
    }, 1000);
}
 }

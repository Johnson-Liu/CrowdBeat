  var colorLoop1 = 0;
  var colors1 = ["second1", "second2", "second3","second4"];
  var myDate1 = new Date();
  var words2 = ["GO", "BULLS"];

  colors1[0] = ["#D4001F","#000000","#FFFFFF"];
  colors1[1] = ["#000000","#000000","#000000"];
  colors1[2] = ["#FFFFFF","#FFFFFF","#FFFFFF"];
  colors1[3] = ["#D4001F","#000000","#FFFFFF"];

  //#FFFFFF means white color
  //#000000 means black color

function BullsMain() { 
  // alert(colors[0][0]);
  var canvas1 = document.getElementById('example1');  
  canvas1.width = innerWidth;
  canvas1.height = innerHeight;
  if (!canvas1) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  //alert("test1");
  // Get the rendering context for 2DCG
  var context1 = canvas1.getContext('2d');
  // s = myDate.getSeconds();
  //alert(s);

  // sleep(3000);
  s1 =  myDate1.getSeconds();
  //alert(s2);

  //let the code sleep until another new second comes
  while(true){
    var TempDate1 = new Date();
    ms1 = TempDate1.getMilliseconds();
    // s = s+1;
    if(ms1 == 0)
      break;
  }

    s1 = s1+1;
    r1 = s1%colors1.length;
    //alert(colors.length);
    colorLoop1 = r1;
    // alert(s);
    //  every 1000ms, run the colorChange function
    var interal1 = setInterval(function () {
        colorChange1(context1,r1);
    }, 1000);
}


function colorChange1(context1, r1) {
  //clear all the screen
   //give color to the paint
   //context.fillStyle = "white";
   //paint the background color
   //context.fillRect(0, 0, 4000, 3000);
   //give color to the paint
   context1.clearRect(0, 0, innerWidth, innerHeight);
   var colorLength1  =  colors1[0].length - 1; 
   var randomMark1 = getRandomInt(0 , colorLength1);
   context1.fillStyle = colors1[colorLoop1][randomMark1];
   //draw the block in the middle
   context1.fillRect(0, 0, innerWidth, innerHeight);

   //show the words
    if(colorLoop1 == 1){
    //set the font
    context1.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context1.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context1.fillText(words2[0], innerWidth*0.27, innerHeight*0.57);

    }
    else if(colorLoop1 == 2){
    //set the font
    context1.font = "300px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context1.fillStyle = "#000000";
    //draw the words, and set the positon
    context1.fillText(words2[1], innerWidth*0.01, innerHeight*0.57);
    }

   colorLoop1 = colorLoop1 + 1;
   if(colorLoop1 ==colors1.length){
    colorLoop1 =0;
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

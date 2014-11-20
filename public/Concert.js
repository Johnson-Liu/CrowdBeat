var colorLoop2 = 0;
  var colors2 = ["second1", "second2", "second3","second4"];
  var myDate2 = new Date();
  var words3 = ["LET'S", "GO", "BULLS"];

  colors2[0] = ["#D4001F","#D4001F","#D4001F"];
  colors2[1] = ["#000000","#000000","#000000"];
  colors2[2] = ["#FFFFFF","#FFFFFF","#FFFFFF"];
  colors2[3] = ["#D4001F","#D4001F","#D4001F"];

function BullsMain2(timeOffset) { 
  alert(timeOffset);
  // alert(colors[0][0]);
  var canvas2 = document.getElementById('example2');  
  canvas2.width = innerWidth;
  canvas2.height = innerHeight;
  if (!canvas2) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  //alert("test1");
  // Get the rendering context for 2DCG
  var context2 = canvas2.getContext('2d');
  // s = myDate.getSeconds();
  //alert(s);

  // sleep(3000);
  s2 =  myDate2.getSeconds();
  //alert(s2);

  //let the code sleep until another new second comes
  while(true){
    var TempDate2 = new Date();
    ms2 = TempDate2.getMilliseconds();
    // s = s+1;
    if(ms2 == 0)
      break;
  }

    s2 = s2+1;
    r2 = s2%colors2.length;
    //alert(colors.length);
    colorLoop2 = r2;
    // alert(s);
    //  every 1000ms, run the colorChange function
    var interal2 = setInterval(function () {
        colorChange2(context2,r2);
    }, 1000);
}
function colorChange2(context2, r2) {
  //clear all the screen
   //give color to the paint
   //context.fillStyle = "white";
   //paint the background color
   //context.fillRect(0, 0, 4000, 3000);
   //give color to the paint
   context2.clearRect(0, 0, innerWidth, innerHeight);
   var colorLength2  =  colors2[0].length - 1; 
   var randomMark2 = getRandomInt(0 , colorLength2);
   context2.fillStyle = colors2[colorLoop2][randomMark2];
   //draw the block in the middle
   context2.fillRect(0, 0, innerWidth, innerHeight);

   //show the words
    if(colorLoop2 == 0){
    //set the font
    context2.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context2.fillStyle = "#000000";
    //draw the words, and set the positon
    context2.fillText(words3[0], innerWidth*0.07, innerHeight*0.57);

    }
    else if(colorLoop2 == 1){
    //set the font
    context2.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context2.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context2.fillText(words3[1], innerWidth*0.27, innerHeight*0.57);

    }
    else if(colorLoop2 == 2){
    //set the font
    context2.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context2.fillStyle = "#000000";
    //draw the words, and set the positon
    context2.fillText(words3[2], innerWidth*0.01, innerHeight*0.57);
    }

   colorLoop2 = colorLoop2 + 1;
   if(colorLoop2 ==colors2.length){
    colorLoop2 =0;
   }      
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
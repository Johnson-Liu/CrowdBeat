  var colorLoop;
  var colors = ["second1", "second2", "second3","second4", "second5","second6","second7","second8","second9","second10","second11","second12"];

  // colors[0] = ["#110014","#220029", "#33003D","#440052"];
  // //colors[0] = ["white","#220029", "#33003D","#440052"];
  // colors[1] = ["#33003D","#440052", "#520063","#66007A"];
  // colors[2] = ["#520063", "#66007A", "#77008F","#8800A3"];
  // colors[3] = ["#77008F", "#8800A3", "#9900B8","#AA00CC"];
  // colors[4] = ["#9900B8", "#AA00CC", "#BB00E0","#CC00F5"];
  // colors[5] = ["#BB00E0", "#CC00F5", "#D60AFF", "#DA1FFF"];
  // colors[6] = ["#D60AFF", "#DA1FFF", "#DD33FF","#E047FF"];
  // colors[7] = ["#DD33FF", "#E047FF","#E45CFF","#E770FF"];
  // colors[8] = ["#E45CFF", "#E770FF", "#EB85FF", "#EE99FF"];
  // colors[9] = ["#EB85FF", "#EE99FF", "#F1ADFF", "#F5C2FF"];
  // colors[10] = ["#F1ADFF", "#F5C2FF", "#F8D6FF", "#FCEBFF"];
  // colors[11] = ["#FCEBFF", "#FCEBFF", "#FCEBFF", "#FCEBFF"];
  //colors[11] = ["#F5C2FF", "#F8D6FF", "#FCEBFF","#FFFFFF"];
  //colors[11] = ["#F5C2FF", "#F8D6FF", "#FCEBFF","black"];
  //test color array
  colors[0] = ["black","black","black","black"];
  colors[1] = ["red","red","red","red"];
  colors[2] = ["black","black","black","black"];
  colors[3] = ["red","red","red","red"];
  colors[4] = ["black","black","black","black"];
  colors[5] = ["red","red","red","red"];
  colors[6] = ["black","black","black","black"];
  colors[7] = ["red","red","red","red"];
  colors[8] = ["black","black","black","black"];
  colors[9] = ["red","red","red","red"];
  colors[10] = ["black","black","black","black"];
  colors[11] = ["red","red","red","red"];












  //#FFFFFF means white color
  //#000000 means black color

function main() { 
  // alert(colors[0][0]);
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 
  //alert("test1");
  // Get the rendering context for 2DCG
  var context = canvas.getContext('2d');
  // s = myDate.getSeconds();
  //alert(s);
  var myDate = new Date();
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
    // there are six colors
    r = (s%colors.length);
    //alert(colors.length);
    colorLoop = r;
    // alert(s);
    //  every 1000ms, run the colorChange function
    var interal = setInterval(function () {
        colorChange(context,s);
    }, 1000);
}


function colorChange(context, r) {
  //clear all the screen
   context.clearRect(0, 0, 1000, 1000);
   //give color to the paint
   //context.fillStyle = "white";
   //paint the background color
   //context.fillRect(0, 0, 4000, 3000);
   //give color to the paint
   var randomMark = getRandomInt(0,colors[0].length);
   context.fillStyle = colors[colorLoop][randomMark];
   //draw the block in the middle
   context.fillRect(0, 0, 1000, 1000);
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

// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }
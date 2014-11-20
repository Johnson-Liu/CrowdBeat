var colorLoop2 = 0;
  var myDate2 = new Date();
  var words3 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"];

function BullsMain2(timeOffset) { 
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
  var result = timeOffset/1000;///1000;
  colorLoop2 = Math.floor(result);

  //colorLoop2 = result;

  console.log(colorLoop2);

  //let the code sleep until another new second comes
  while(true){
    var TempDate2 = new Date();
    ms2 = TempDate2.getMilliseconds();
    // s = s+1;
    if(ms2 == 0 || ms2 ==2 ||  ms2 ==4 ||  ms2 ==6 || ms2 ==8 || ms2 ==10)
      break;
  }

    //  every 1000ms, run the colorChange function
    var interal2 = setInterval(function () {
        colorChange2(context2);
        if(colorLoop2 == words3.length){
          clearInterval(interal2);
        }
    }, 1000);
}

function colorChange2(context2) {
  //clear all the screen
   //give color to the paint
   //context.fillStyle = "white";
   //paint the background color
   //context.fillRect(0, 0, 4000, 3000);
   //give color to the paint
   context2.clearRect(0, 0, innerWidth, innerHeight);
    context2.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context2.fillStyle = "#000000";

    context2.fillText(words3[colorLoop2], innerWidth*0.07, innerHeight*0.57);
  

   colorLoop2 = colorLoop2 + 1; 
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
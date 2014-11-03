  var colorLoop  = 0;
  var colors = ["black", "red", "blue","grey", "white","orange"];
  var myDate = new Date();



function main() {  
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
  r = s%6;
  colorLoop = r;
  // alert(s);
  //  every 1000ms, run the colorChange function
  var interal = setInterval(function () {
      colorChange(context,s);
  }, 1000);
}


function colorChange(context, r) {
  //clear all the screen
   context.clearRect(0, 0, 4000, 3000);
   //give color to the paint
   context.fillStyle = "#EEEEFF";
   //paint the background color
   context.fillRect(0, 0, 4000, 3000);
   //give color to the paint

   context.fillStyle = colors[colorLoop];
   //draw the block in the middle
   context.fillRect(100, 100, 200, 200);
  colorLoop = colorLoop + 1;
   if(colorLoop ==colors.length){
    colorLoop =0;
   }

         
}


// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }
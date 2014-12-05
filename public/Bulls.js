  var colorLoop1 = 0;
  var colors1 = ["second1", "second2", "second3","second4"];

  var words2 = ["LET'S", "GO", "BULLS"];

  colors1[0] = ["#FFFFFF","#FFFFFF","#FFFFFF"];
  colors1[1] = ["#000000","#000000","#000000"];
  colors1[2] = ["#D4001F","#D4001F","#D4001F"];
  colors1[3] = ["#D4001F","#D4001F","#D4001F"];

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
  // mark1 = 
  //alert(s2);
  // acquireServerMS();
  // alert(localStorage.getItem("ServerMS"));
  // //alert(s2);
  var dateMark1 = new Date();
  var mark1 = dateMark1.getTime();
  acquireServerMS();
  var dateMark2 = new Date();
  var mark2 = dateMark2.getTime();
  var tranOffset = mark2 - mark1;
  alert(tranOffset);


  //alert(localStorage.getItem("ServerMS"));

  serverMS = localStorage.getItem("ServerMS");
  waitTime = 999 - serverMS-tranOffset;

  setTimeout(function(){enter(context1)},waitTime);

  // while(true){
  //   acquireServerMS();
  //   ms1 = localStorage.getItem("ServerMS");
  //   // s = s+1;
  //   if(ms1 ==0)
  //     break;
  // }
  // alert(localStorage.getItem("ServerMS"));
  //   var myDate1 = new Date();
  // // sleep(3000);
  //   s1 =  myDate1.getSeconds();
  //   s1 = s1+1;
  //   r1 = s1%colors1.length;
  //   //alert(colors.length);
  //   colorLoop1 = r1;
  //   // alert(s);
  //   //  every 1000ms, run the colorChange function
  //   var interal1 = setInterval(function () {
  //       colorChange1(context1,r1);
  //   }, 1000);
}
function acquireServerMS(){
    Parse.initialize("wpInUaSnMuLflYrSMnv7c1SvNNuLbFoAT3S5Oby8","yLMJwfxDUcl5bi2O9Q7NngCYOxvraRUhq9eXySVB");
    Parse.Cloud.run('hello', {}, {
      success: function(result) {
        // result is 'Hello World'
        localStorage.setItem("ServerMS",result[0]);
        localStorage.setItem("ServerS", result[1]);
      },
      error: function(error) {
      }
    });

} 

// function acquireServerS(){
//     Parse.initialize("wpInUaSnMuLflYrSMnv7c1SvNNuLbFoAT3S5Oby8","yLMJwfxDUcl5bi2O9Q7NngCYOxvraRUhq9eXySVB");
//     Parse.Cloud.run('hello2', {}, {
//       success: function(result) {
//         // result is 'Hello World'
//         localStorage.setItem("ServerS",result);
//       },
//       error: function(error) {
//       }
//     });

// } 







function enter(context1){
    s1 = localStorage.getItem("ServerS");
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
   var canvas = document.getElementById('example1');  
   canvas.width = innerWidth;
   canvas.height = innerHeight;
   context1.clearRect(0, 0, innerWidth, innerHeight);
   var colorLength1  =  colors1[0].length - 1; 
   var randomMark1 = getRandomInt(0 , colorLength1);
   context1.fillStyle = colors1[colorLoop1][randomMark1];
   //draw the block in the middle
   context1.fillRect(0, 0, innerWidth, innerHeight);

   //show the words
    if(colorLoop1 == 0){
    //set the font
    context1.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context1.fillStyle = "#D4001F";
    //draw the words, and set the positon
    context1.fillText("LET'S2", (innerWidth*0.5 - 130), innerHeight*0.57);

    }
    else if(colorLoop1 == 1){
    //set the font
    context1.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context1.fillStyle = "#D4001F";
    //draw the words, and set the positon
    context1.fillText("GO", (innerWidth*0.5 - 70), innerHeight*0.57);

    }
    else if(colorLoop1 == 2){
    //set the font
    context1.font = "100px Georgia";
    //set the textAlign
    //context.textAlign = "left";
    //set the color 
    context1.fillStyle = "#FFFFFF";
    //draw the words, and set the positon
    context1.fillText("BULLS", (innerWidth*0.5 - 159), innerHeight*0.57);
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

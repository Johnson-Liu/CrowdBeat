var colorLoop2 = 0;
var myDate2 = new Date();
var words3 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"];
var colorsC = ["#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 
               "#2980b9","#2980b9", "#206084", "#206084", "#2c3e50", "#2c3e50" ,"#000000", "#000000", 

               "#551A8B","#551A8B","#7D26CD", "#7D26CD", "#9B30FF", "#9B30FF", "#ecf0f1", "#ecf0f1",
               "#551A8B","#551A8B","#7D26CD", "#7D26CD", "#9B30FF", "#9B30FF", "#ecf0f1", "#ecf0f1",

               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",
               "#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6","#95a5a6",

               "#ecf0f1","#c0cdd1","#ecf0f1","#c0cdd1","#ecf0f1","#c0cdd1","#ecf0f1","#c0cdd1",

               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",

               "#34495e","#34495e","#34495e","#34495e","#7f8c8d","#7f8c8d","#7f8c8d","#7f8c8d",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1",

               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",
               "#2980b9","#2980b9","#8e44ad","#8e44ad","#2c3e50","#2c3e50","#000000","#000000",

               "#34495e","#34495e","#34495e","#34495e","#7f8c8d","#7f8c8d","#7f8c8d","#7f8c8d",
               "#95a5a6","#95a5a6","#95a5a6","#95a5a6","#ecf0f1","#ecf0f1","#ecf0f1","#ecf0f1"];









function BullsMain2(){ 
      alert("test");
      Parse.initialize("R1hjTepo1Qyv2WVVYxD6g5K2CVqqGIXPLjqPmsZF", "eLLqf2YbjLgt8aNvsQyasUIL2jTEgoBvCDH1bRmI");
          var BulbObj = Parse.Object.extend("Bulb") ;
          var bulbObj1 = new BulbObj();
          var ParseQuery = new Parse.Query(BulbObj);
          //alert("getState");
         ParseQuery.get("AbUQiOYkBN", {
          success: function(bulbObj1) {
            var StateResult = bulbObj1.get("State");
            var TimeResult=  bulbObj1.get("TimeValue");
            alert(TimeResult);
            //get the million seconds since 1970
            // acquireServerMS();
            // BullsMain2new(StartTime);
            }
         });  

}


function BullsMain2new(StartTime) { 
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
  acquireServerMS();
  var timeOffset = localStorage.getItem("MS") - StartTime;
  alert(timeOffset);
  var result = timeOffset/125;///1000;
  colorLoop2 = Math.floor(result);
  var waitTime = colorLoop2*125 + 125 - timeOffset;
  setTimeout(function(){enter(context2)},waitTime);

  //alert(result);
  // alert(timeOffset);
  // alert(result);
  // alert(colorsC.length);
  // alert(colorsC[colorLoop2]); 

  //alert(colorLoop2);
  //colorLoop2 = result;

  // console.log(colorLoop2);

  //let the code sleep until another new second comes

    //  every 125ms, run the colorChange function

}




function enter(context2){
      var interal2 = setInterval(function () {
        colorChange2(context2);
        if(colorLoop2 == colorsC.length){
          clearInterval(interal2);
        }
    }, 125);


}

function acquireServerMS(){
    Parse.initialize("wpInUaSnMuLflYrSMnv7c1SvNNuLbFoAT3S5Oby8","yLMJwfxDUcl5bi2O9Q7NngCYOxvraRUhq9eXySVB");
    Parse.Cloud.run('hello', {}, {
      success: function(result) {
        // result is 'Hello World'
        localStorage.setItem("ServerMS",result[0]);
        localStorage.setItem("ServerS", result[1]);
        //ms since 1970 year
        localStorage.setItem("MS",result[2]);
      },
      error: function(error) {
      }
    });

} 
function colorChange2(context2) {
    var canvas = document.getElementById('example2');  
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    context2.clearRect(0, 0, innerWidth, innerHeight);
    context2.fillStyle = colorsC[colorLoop2];
    context2.fillRect(0,0,innerWidth,innerHeight);
    colorLoop2 = colorLoop2 + 1; 
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
//Parse.initialize("wpInUaSnMuLflYrSMnv7c1SvNNuLbFoAT3S5Oby8","yLMJwfxDUcl5bi2O9Q7NngCYOxvraRUhq9eXySVB");
Parse.Cloud.define("hello", function(request, response) {
  response.success("Welcome! Enjoy your Show!");
});

Parse.Cloud.define("getOffset", function(request, response) {
  var query = new Parse.Query("Pod");
  var id = + request.params.pod;
  query.equalTo("podId", id); 
  query.first({
    success: function(obj) {
      if (obj) {
        response.success(makeOffset(obj));
      }
      else {
        createPod(id, response);
      }
    },
    error: function() {
      response.error("query failure");
    }
  });
});

function createPod(id, response) {
  var Pod = Parse.Object.extend("Pod");
  var pod = new Pod();
  
  pod.save({ podId: id, start: new Date() }, {
    success: function(obj) {
      response.success(makeOffset(obj));
    },
    error: function(obj, error) {
      response.error("couldn't create " + id + ": " + error.message);
    }
  });
}

function makeOffset(obj) {
  return { pod: obj.get("podId"), offset: new Date() - obj.get("start") };
}
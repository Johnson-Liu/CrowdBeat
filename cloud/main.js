
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.initialize("wpInUaSnMuLflYrSMnv7c1SvNNuLbFoAT3S5Oby8","yLMJwfxDUcl5bi2O9Q7NngCYOxvraRUhq9eXySVB");
Parse.Cloud.define("hello", function(request, response) {
  response.success("Welcome! Enjoy your Show!");
});
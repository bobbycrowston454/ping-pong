//back end
var counting= [];
var countBy = 1;
var countTo;
var counter = function(counter){
  for(i = 0; i <= countTo; i += countBy){
     var countTo = i;
  } return counter;
}

var customWords = function(customWords){
  if( customWords % 15 === 0){
    customWords = "ping-pong";
  }
    if( customWords % 3 === 0){
      customWords = "ping";
    }
    if( customWords % 5 === 0){
      customWords = "pong";
    }
    return customWords;

}
//user interface
$(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($('#numInput').val());
    $("#results").prepend("<li>" + customWords(numberInput) + "</li>");
  });
});

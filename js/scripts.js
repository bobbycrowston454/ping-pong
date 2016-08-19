//back end
var countBy = 1;
var countTo;
var counters = function(counter){
  var counting= [];
  for(i = 1; i <= counter; i ++){
    counting = counting + i;
    var newCount = counting.split("");
    console.log(i);
  } return newCount;
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
    $("#results").prepend("<li>" + counters(numberInput) + "</li>");
  });
});

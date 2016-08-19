//back end
var countBy;
var i = 0;

function countTo(number) {
    var arr = [];
    for (var i = 1; i<=number; i++) {
        arr.push(i.toString());
    }
    return arr.toString();
}

var customWords = function(customWord){
  var counting= [];
  for(var i = 1; i <= customWord; i++){
    if(( customWord % 15 === 0) || ( customWord % 5 === 0) ||( customWord % 3 === 0)){
      return true;
    } else {
      return false;
    }
  }
  //
  // if( customWord % 15 === 0){
  //   customWord = "ping-pong";
  // }
  // if( customWord % 3 === 0){
  //   customWord = "ping";
  // }
  // if( customWord % 5 === 0){
  //   customWords = "pong";
  // }
  // return customWords;
}

var finalNumbers = function(finalWord){
  var result;
  result = customWords(customWord);
  // result = counters(result);
  return result;
}



//user interface
$(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($('#numInput').val());
    if(!numberInput){
      alert("please enter a number");
    }
    if(numberInput <= 0){
      alert("please enter a number greater than 0");
    }

    $("#results").append("<li>" + countTo(numberInput) + "</li>");
  });
});

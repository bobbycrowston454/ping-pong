//back end
var returns="";
var word= [];

function countTo(numbers) {
  word = [];
    for (var j = 1; j <= numbers; j++){
      if(j % 15 === 0){
       word.push("ping-pong");
       word.splice(j+2);
      }
      if((j % 3 === 0) && (j % 15 !== 0)){
        word.push("ping");
        word.splice(j, j);
      }
      if((j % 5 === 0) && (j % 15 !== 0)){
        word.push("pong");
        word.splice(j+2);

      } else
      word.push(j);
      word.splice(j);
    }
    return word;
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
    $("#results").children().remove();
    $("#results").text(numberInput)
    $("#results").empty();
    $("#results").prepend("<li>" + countTo(numberInput) + "</li>");
  });
});

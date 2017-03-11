//Business Logic

var pingMath = function(inputNo) {
  var result = [];
  for (var i = 0; i <= inputNo; i++) {
    if (i % 3 === 0 && i % 15 !== 0) {
      result.push("Ping!");
    } else if (i % 5 === 0 && i % 15 !== 0) {
      result.push("Pong!");
    } else if (i % 15 === 0) {
      result.push("Ping-Pong!");
    } else {
      result.push(i);
    }
  }
  return result;
};



//Front End Logic

$(function() {
  $(".pingpong" ).submit(function(event) {
    event.preventDefault();
    $("ul#showResult").empty();
    var inputNo = parseInt($("#pong-number").val());
    var output = pingMath(inputNo);
    for (var i = 1; i <= inputNo; i++) {
     $("#showResult").append("<li>" + output[i] + "</li>");
   }
  });
});

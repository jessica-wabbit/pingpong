//Business Logic

var pingMath = function(inputNo) {
  var result = [];
  for (var i = 0; i <= inputNo; i++) {
    if ()

  }
  return result;
};



//Front End Logic

$(document).ready(function() {
  $("form.pingpong").submit(function(event) {
    event.preventDefault();

    var inputNo = parseInt($("#pongNumber").val());
    var output = pingMath(inputNo);
    for (var i = 1; <= inputNo; i++) {
      $("#showResult").append("<li>" + output[i] + "</li>");
    }
  });
});

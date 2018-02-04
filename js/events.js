//define functions here

$(document).ready(function(){

// call functions here

});

$("form").on("submit", function() {
  if ($("input:forst").val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

function getIt() {
  $("p").on("click", function(){
    alert('Hey!')
  })
}

function frameIt() {
  var image = $("img")
  $("img").on("load", function(){
    image.setAttribute()
  })
}
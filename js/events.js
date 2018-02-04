//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $("p").on("click", function(){
    alert('Hey!')
  })
}

function frameIt() {
  var image = $("img")
  $("img").on("load", function(){
    image.setAttribute('class', 'tasty')
  })
}

function pressIt() {
  
}
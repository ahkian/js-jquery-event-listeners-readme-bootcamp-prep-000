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
  var image = $("img")[0]
  $("img").on("load", function(){
    image.setAttribute('class', 'tasty')
  })
}

function pressIt() {
  $("form input#typing").on("keydowm", function(){
    if (key.which === 71 ){console.log("You pressed g!")}
  })
}
// This is how you can nest forEach loops

var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
var values= ["2","3","4","5","6","7","8","9","10", "Jack", "Queen", "King", "Ace"];
var cards = [];

suits.forEach(function(suit){
  values.forEach(function(value){
    cards.push(" " + value + " of " + suit );
  });

});
var noComma = cards.join('\n');
alert(noComma);


$(document).ready(function() {
  // $(".display").text(noComma);

  console.log(cards);


  $(".display").text(cards);



  });

// Map functions
// var values= ["2","3","4","5","6","7","8","9","10", "Jack", "Queen", "King", "Ace"];
//
// var spades = values.map(function(value){
//   return value + " of spades";
// });
// var clubs = values.map(function(value){
//   return value + " of clubs";
// var hearts = values.map(function(value){
//   return value + " of hearts";
// });
// var diamonds = values.map(function(value){
//   return value + " of diamonds";
// });
// });
//
// alert(hearts + diamonds + clubs + spades);

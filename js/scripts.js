var suits = ["spades", "clubs", "hearts", "diamonds"];
var values= ["2","3","4","5","6","7","8","9","10", "Jack", "Queen", "King", "Ace"];
var cards = [];

suits.forEach(function(suit){
  values.forEach(function(value){
    cards.push(" " + value + " of " + suit );
  });

});
function filterItems(query) {
  return cards.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
};

var spades = filterItems('spades');
console.log(spades);
var clubs = filterItems('clubs');
console.log(clubs);
var hearts = filterItems('hearts');
var diamonds = filterItems('diamonds');
;

var noComma = cards.join('\n');







$(document).ready(function() {

  //   if(filterItems("spades") === true) {
  //     $("." + suits).text(spades);
  //   } else if(filterItems("clubs") === true) {
  //     $("." + suits).text(spades);
  //   } else {
  //     console.log("damn");
  //   }

    $(".spades").text(spades);
    $(".clubs").text(clubs);
    $(".hearts").text(hearts);
    $(".diamonds").text(diamonds);

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

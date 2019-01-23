const suits = ["spades", "clubs", "hearts", "diamonds"];
const values= ["2","3","4","5","6","7","8","9","10", "Jack", "Queen", "King", "Ace"];
let cards = [];

suits.forEach(function(suit){
  values.forEach(function(value){
    cards.push(" " + value + " of " + suit );
  });
});

function filterItems(query) {
  return cards.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};


var noComma = cards.join('\n');
alert(noComma);
$(document).ready(function() {
  suits.forEach(function(sweet){
    $("." + sweet).text(filterItems(sweet));
    $("." + sweet).text(filterItems(sweet));
    $("." + sweet).text(filterItems(sweet));
    $("." + sweet).text(filterItems(sweet));
  });
  //   if(filterItems("spades") === true) {
  //     $("." + suits).text(spades);
  //   } else if(filterItems("clubs") === true) {
  //     $("." + suits).text(spades);
  //   } else {
  //     console.log("damn");
  //   }


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

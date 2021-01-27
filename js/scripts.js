function Dice(roll) {
  this.roll = roll
}


Dice.prototype.rollDice = function() {
  return Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1)) + 1;
}

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }












$(document).ready(function(){

});
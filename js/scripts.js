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
  let newDice = new Dice();
  let total1 = 0;
  let total2 = 0;
  $('button#roll-1').on('click', function(){
    let rollOne = newDice.rollDice();
    $('ul#score-1').append('<li>' + rollOne + '</li>');
    if(rollOne != 1){
      total1 += rollOne;
      $('div#total-1').text(total1);
    }
  });

  $('button#roll-2').on('click', function(){
    let rollTwo = newDice.rollDice();
    $('ul#score-2').append('<li>' + rollTwo + '</li>');
    total2 += rollTwo;
    $('div#total-2').text(total2);
  });
});


  
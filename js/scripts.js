//Business Logics
function Dice(roll) {
  this.roll = roll
};
Dice.prototype.rollDice = function() {
  return (Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1)) + 1);
};
function Player(name){
  this.name = name;
  this.turnScore = 0;
  this.totalBank = 0;
};
Player.prototype.checkWinner = function(){
  if(this.totalBank >= 100){
    $('div.hide-when-win').hide();
    $('div#hidden-win-card').show();
    $('div#winner-output').prepend("<p class='text-center' id='remove-p'>"+ this.name +" wins!</p>");
  };
};
// UI Logic
$(document).ready(function(){
  document.getElementById('audio').volume = 0.2;
  let newDice = new Dice();
  let total1 = 0;
  let total2 = 0;

// function getImage (number) {
//   if (number === 1) {
//     return "img/dice-1.png"
//   } else if (number === 2) {
//     return "img/dice-2.png"
//   } else if (number === 3) {
//     return "img/dice-3.png"
//   } else if (number === 4) {
//     return "img/dice-4.png"
//   } else if (number === 5) {
//     return "img/dice-5.png"
//   } else {
//     return "img/dice-6.png"
//   }
// }
  
  $('form').submit(function(event){
    event.preventDefault();
    player1Name = $('input#player-1').val();
    player2Name = $('input#player-2').val();
    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);
    if ($('input#player-1').val() === '') {
      $('span.player-1-name').text('Player 1')
    } else {
      $('span.player-1-name').text(player1.name);
    }
    if ($('input#player-2').val() === '') {
      $('span.player-2-name').text('Player 2')
    } else {
      $('span.player-2-name').text(player2.name);
    }
    $('div.empty-total').text(0);
    $('form').hide(); 
    $('.hide-all').show();
    $('button#roll-1').on('click', function(){
      let rollOne = newDice.rollDice();
      $('div#score-1').text(rollOne);
      if(rollOne != 1){
        total1 += rollOne;
        $('div#total-1').text(total1);
      } else {
        document.getElementById('roll-1').disabled = true;
        document.getElementById('roll-2').disabled = false;
        document.getElementById('flip-card').classList.toggle('do-flip');
        $('div.empty-total').text(0);
        $('div#score-1').text('');
        total1 = 0;
      }
    });
    $('button#roll-2').on('click', function(){
      let rollTwo = newDice.rollDice();
      $('div#score-2').text(rollTwo);
      if(rollTwo != 1){
        total2 += rollTwo;
        $('div#total-2').text(total2);
      } else {
        document.getElementById('roll-2').disabled = true;
        document.getElementById('roll-1').disabled = false;
        document.getElementById('flip-card').classList.toggle('do-flip');
        $('div.empty-total').text(0);
        $('div#score-2').text('');
        total2 = 0;
      }
    });
    $('button#hold-1').on('click', function(){
      player1.totalBank += total1;
        if(total1 != 0){
          document.getElementById('roll-1').disabled = true;
          document.getElementById('roll-2').disabled = false;
          document.getElementById('bank-output-1').innerHTML = player1.totalBank;
          document.getElementById('flip-card').classList.toggle('do-flip');
          total1 = 0;
          $('div.empty-total').text(0);
          $('div#score-1').text('');
        }
        player1.checkWinner();
    });
    $('button#hold-2').on('click', function(){
      player2.totalBank += total2;
      if(total2 != 0){
        document.getElementById('roll-2').disabled = true;
        document.getElementById('roll-1').disabled = false;
        document.getElementById('bank-output-2').innerHTML = player2.totalBank;
        document.getElementById('flip-card').classList.toggle('do-flip');
        total2 = 0;
        $('div.empty-total').text(0);
        $('div#score-2').text('');
      }
      player2.checkWinner();
    });
    $('button#replay-button').on('click', function(){
      $('span#bank-output-1').text(0);
      $('span#bank-output-2').text(0);
      player1.totalBank = 0;
      player2.totalBank = 0;
      $('div.hide-when-win').show();
      $('div#hidden-win-card').hide();
      $('p#remove-p').remove();
    });
  });
});

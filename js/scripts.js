//Business Logics

function Dice(roll) {
  this.roll = roll
};

Dice.prototype.rollDice = function() {
  return Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1)) + 1;
};

function Player(name){
  this.name = name;
  this.turnScore = 0;
  this.totalBank = 0;
};

Player.prototype.checkWinner = function(){
  if(this.totalBank >= 100){
    console.log("This is working");
    $('div.win-hide').hide();
    $('div#card-hide').show();
    $('div#winner-output').prepend("<p class='text-center'>Congratulations! You have won the game! Reload the page to play again</p>")
  }
}

// UI Logic
$(document).ready(function(){
  let newDice = new Dice();
  let player1 = new Player('Player 1');
  let player2 = new Player("Player 2");
  let total1 = 0;
  let total2 = 0;
  $('div#total-1').text(0);
  $('div#total-2').text(0);
  $('button#roll-1').on('click', function(){
    let rollOne = newDice.rollDice();
    $('div#score-1').text(rollOne);
    if(rollOne != 1){
      total1 += rollOne;
      $('div#total-1').text(total1);
    } else {
      document.getElementById('flip-card').classList.toggle('do-flip');
      $('div#total-1').text(0);
      $("div#score-1").text('');
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
      document.getElementById('flip-card').classList.toggle('do-flip');
      $('div#total-2').text(0);
      $('div#score-2').text('');
      total2 = 0;
    }
  });
  $('button#hold-1').on('click', function(){
    player1.totalBank += total1;
      if(total1 != 0){
        document.getElementById('bank-output-1').innerHTML = player1.totalBank;
        document.getElementById('flip-card').classList.toggle('do-flip');
        total1 = 0;
        $('div#total-1').text(0);
        $("div#score-1").text('');
      }
      player1.checkWinner();
  });
  $('button#hold-2').on('click', function(){
    player2.totalBank += total2;
    if(total2 != 0){
      document.getElementById('bank-output-2').innerHTML = player2.totalBank;
      document.getElementById('flip-card').classList.toggle('do-flip');
      total2 = 0;
      $('div#total-2').text(0);
      $('div#score-2').text('');
    }
    player2.checkWinner();
  });
  $('button#reload-btn').on('click', function(){
    console.log('This button has been clicked')
    location.reload();
  });
  document.getElementById('audio').volume = 0.2;
});


  





// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let start = true;

let computer = [];
let player = [];
let level = 0;

$("body").on("keydown", function () {
  if (start) {
    // hideSpan();
    setTimeout(function(){
      $('.mainText').html('<h1>Welcome To Simons Game</h1>');
      $(".headSpan").html(`Level - ${level}`);
    },200)
    playComuter();
    start = false;
  }
});

$(`.box`).on("click", function () {
  player.push(this.classList[1]);
  let userClickedBox = this.classList[1];
  addingAnimation(`.${userClickedBox}`);
  console.log(`compute ${computer}`);
  console.log(`player ${player}`);
  checkAnswer(player.length - 1);
});

function checkAnswer(index) {
  if (computer[index] === player[index]) {
    if (computer.length == player.length) {
      player = [];
      level++;
      $(".headSpan").html(`Level - ${level}`);
      setTimeout(function () {
        playComuter();
      }, 300);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  $('.mainText').html('<h1>Game Over</h1>');
  computer = [];
  player = [];
  $('.headSpan').html('<span>Please Press Any Key to Start</span>');
  start=true;
  level=0;
}

function playComuter() {
  let randomNumber = 1 + Math.floor(Math.random() * 4);
  setTimeout(function () {
    let systemSelectedBox = `box${randomNumber}`;
    $(`.${systemSelectedBox}`).fadeOut(100).fadeIn(100);
    computer.push(systemSelectedBox);
  }, 200);
}

function addingAnimation(box) {
  document.querySelector(box).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(box).classList.remove("pressed");
  }, 150);
}

function hideSpan() {
  $(".headSpan > span").css("visibility", "hidden");
}

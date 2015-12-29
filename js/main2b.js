console.log('activate framework!');

var imgClasses, stoneClasses;
var fadeOutTime = 4000;
var addHoverDirections = function() {
  $("#0").mouseenter(function(){
    $("#pinky").show();
  });
  $("#0").mouseleave(function(){
    $("#pinky").hide();
  });
};
function Medusa(num, choice, stone, pic) {
  this.num = num;
  this.choice = choice;
  this.stone = stone;

  this.turnToStone = function () {
    $('#' + this.num).removeClass(imgClasses[this.num]).addClass(stoneClasses[this.num]).fadeOut(fadeOutTime);
    this.stone = true;
    this.choice = null;
  };
}

var medusa0 = new Medusa(0, null, false);
var medusa1 = new Medusa(1, null, false);
var medusa2 = new Medusa(2, null, false);
var medusa3 = new Medusa(3, null, false);
var medusa4 = new Medusa(4, null, false);

var medusas = [medusa0, medusa1, medusa2, medusa3, medusa4];

var colors = {
  0 : "blue 1",
  1 : "pink 2",
  2 : "purple 3",
  3 : "orange 4",
  4 : "green 5"
};

var addHoverDirections = function() {
  $("#0").mouseenter(function(){
    $("#pinky").show();
  });
  $("#0").mouseleave(function(){
    $("#pinky").hide();
  });
};

var init = function() {
  addHoverDirections();

  imgClasses = ["userLoad", "twoLoad", "threeLoad", "fourLoad", "fiveLoad"];
  stoneClasses = ["stoneUser", "stoneTwo", "stoneThree", "stoneFour", "stoneFive"];
};

////////////WELCOME PAGE
$("#welcomeIntro").hide();
$("#rules").on('click', function() {
  $("#welcomeIntro").show(0);
});

$("#welcomeIntro").on('click', function() {
  $(this).hide(0);
});



/////////BUTTONS (FOUR OTHER MEDUSAS)

$('#1').on('click', function() {
  if ($("#0").hasClass(stoneClasses[0])) return;
  playGame(this.id);
});


$('#2').on('click', function() {
  if ($("#0").hasClass(stoneClasses[0])) return;
  playGame(this.id);
});

$('#3').on('click', function() {
  if ($("#0").hasClass(stoneClasses[0])) return;
  playGame(this.id);
});

$('#4').on('click', function() {
  if ($("#0").hasClass(stoneClasses[0])) return;
  playGame(this.id);
});

///RESTART FUNCTION TO CLEAR THE GAME
init();

///GAME STARTS, USER PICKED, OTHER MEDUSAS PICK
var playGame = function(playerOneChoice) {
  $('.color').remove();
  medusaChoiceParty(playerOneChoice);
  checkForMatches();
  gameOver();
};

var medusaChoiceParty = function (playerOneChoice) {
  medusas[0].choice = parseInt(playerOneChoice, 10);
  for (var i = 1; i < medusas.length; i++) {
    if (!medusas[i].stone) {
      do {
        medusas[i].choice = Math.floor(Math.random() * medusas.length);
      } while (medusas[i].choice === i || medusas[medusas[i].choice].stone);
    }
  }
};

var checkForMatches = function () {
  var setToStoneArray = [];
  for (var i = 0; i < medusas.length; i++) {
    var currentMedusa = medusas[i];
    if (!currentMedusa.stone) {
      var currentChoice = currentMedusa.choice;
      var lookedUpMedusa = medusas[currentChoice];
      console.log(lookedUpMedusa);
      var lookedUpChoice = lookedUpMedusa.choice;


      if (lookedUpChoice === currentMedusa.num) {
        setToStoneArray.push(currentMedusa.num);
      } else {
        console.log('safe');
      }
      console.log(currentMedusa.num, currentChoice, currentMedusa.stone);
      console.log(lookedUpMedusa.num, lookedUpChoice, lookedUpMedusa.stone);
      console.log(' ');
      //color picks      
      console.log(colors[i] +' '+ 'picked' +' '+ colors[currentMedusa.choice]);
      var imgNumPath = "css/images/" + medusas[currentChoice].num +".png";
      var idNum = $('#'+ currentMedusa.num);
      var imgIdNumPath = idNum.append("<img class='color' src ="+imgNumPath+">");
      // $('.color').medusas[currentChoice].num.remove();

      // if (!medusas[currentChoice].num) {
      //     medusas[i].pic = false;
      // $("<img class='color' src = css/images/"+ i+".png>").remove();
      // }
    }
  }
  console.log(setToStoneArray);
  for (var j = 0; j < setToStoneArray.length; j++) {
    medusas[setToStoneArray[j]].turnToStone();
    console.log(medusas[setToStoneArray[j]]);
  }
  console.log(' ');
};

// var NumFade = function(pic) {
//   //if there is already an img there then hide the next one.
//   if (medusas.pic) {
//     count = 1;

//     $('html').on('click', function() {
//       $('.color').hide().on('click', function(){
//       });
//     });
//   } else {

//   }
// };



var gameOver = function() {
  var count = 4;
  for (var i = 0; i < medusas.length; i++) {
    
    if (medusas[i].stone) count--;
  }
  if (medusas[0].stone) {
    // When Game Over, remove MouseEnter/MouseLeave
    $("#0").off();
    console.log("GAME OVER YOU LOSE");
    return $("#loser").delay(1000).show(400);
  } else if (count < 2) {
    $("#0").off();
    console.log("USER WINS");
    return $("#winner").delay(1000).show(400);
  }
};





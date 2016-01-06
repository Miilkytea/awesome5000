console.log('activate framework!');

var imgClasses, stoneClasses;
var fadeOutTime = 3000;

function Medusa(num, choice, stone) {
  this.num = num;
  this.choice = choice;
  this.stone = stone;

  this.turnToStone = function () {
    $('#' + this.num).removeClass(imgClasses[this.num]).addClass(stoneClasses[this.num]).fadeOut(fadeOutTime);
    this.stone = true;
    this.choice = null;

  };

  this.hover = function () {
    var self = this;
    $('#' + this.num).mouseenter(function(){
      $('.number'+ self.num).show();

    });
    var that = this;
    $('#' + this.num).mouseleave(function(){
      $('.number'+ that.num).hide();

    });
  };
    this.hover();
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


var addHoverBlue = function() {
  $("#0").mouseenter(function(){
    $("#blue").show();
  });
  $("#0").mouseleave(function(){
    $("#blue").hide();
  });
};

var init = function() {
  addHoverBlue();
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

$('#rules').mouseenter(function() {
  $(this).append('<img class="rules" src="css/images/rules.gif">');
});

$('#rules').mouseleave(function() {
  $('img').remove('.rules');
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
  setTimeout(function() {
    $('.color').remove();
    medusaChoiceParty(playerOneChoice);
    checkForMatches();
    gameOver();
  }, 300);
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
      console.log(colors[i] +' '+ 'picked' +' '+ colors[currentMedusa.choice]);
      var imgNumPath = "css/images/" + medusas[currentChoice].num +".png";
      var idNum = $('#'+ currentMedusa.num);
      var imgIdNumPath = idNum.append("<img class='color' src ="+imgNumPath+">");

    }
  }
  console.log(setToStoneArray);
  for (var j = 0; j < setToStoneArray.length; j++) {
    medusas[setToStoneArray[j]].turnToStone();
    console.log(medusas[setToStoneArray[j]]);
  }
  console.log(' ');
};


var gameOver = function() {
  var count = 4;
  for (var i = 0; i < medusas.length; i++) {
    if (medusas[i].stone) {
      $('#' + medusas[i].num).off();

      count--;
    }

  }
  if (medusas[0].stone) {
    // When Game Over, remove MouseEnter/MouseLeave
    for (var j = 0; j < medusas.length; j++) {
      $('#' + medusas[j].num).off();
    }
    console.log("GAME OVER YOU LOSE");
    return $("#loser").delay(1500).show(400);
  } else if (count < 2) {
     for (var k = 0; k < medusas.length; k++) {
      $('#' + medusas[k].num).off();
    }
    console.log("USER WINS");
    return $("#winner").delay(1500).show(400);
  }
};





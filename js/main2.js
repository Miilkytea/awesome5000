console.log('activate framework!');

var medusas, imgClasses, stoneClasses;

var init = function() {
  medusas = [null, null, null, null, null];

  imgClasses = ["userLoad", "twoLoad", "threeLoad", "fourLoad", "fiveLoad"];
  stoneClasses = ["stoneUser", "stoneTwo", "stoneThree", "stoneFour", "stoneFive"];
};

////////////WELCOME PAGE
$("#welcomeIntro").on('click', function() {
  $(this).fadeOut(0);
});

/////////BUTTONS (FOUR OTHER MEDUSAS)
$('#1').on('click', function() {
  playGame(this.id);
  console.log(medusas);
  checkForStone();

});

$('#2').on('click', function() {
  playGame(this.id);
  console.log(medusas);
  checkForStone();
});

$('#3').on('click', function() {
  playGame(this.id);
  console.log(medusas);
  checkForStone();
});

$('#4').on('click', function() {
  playGame(this.id);
  console.log(medusas);
  checkForStone();
});

///RESTART FUNCTION TO CLEAR THE GAME
init();

///GAME STARTS, USER PICKED, OTHER MEDUSAS PICK
var playGame = function(choice) {
  console.log("playGame called");
  medusas[0] = choice;
  for (var i = 1; i < medusas.length; i++) {
    makeChoice(i);
  }

};
///OTHER MEDUSAS CHOICES ARE PICKED AT RANDOM
var makeChoice = function(numMedusa) {
  console.log("makeChoice called");
  var pick = numMedusa;
  while (pick === numMedusa) {
    pick = Math.floor(Math.random() * 5);
  }
  //THE SELECTION IS CONVERTED TO A STRING IN THE ARRAY
  medusas[numMedusa] = pick.toString();
  medusas.map(function(x) {
    console.log(x);
  });
  checkForStone();
};

var checkForStone = function() {
  console.log("checkForStone called");
  for (var i = 0; i < medusas.length; i++) {
    //turns a string into a number
    if (i.toString() === medusas[parseInt(medusas[i])]) {
      medusas.map(function(x) {
          console.log(x);
          return;
        })
        //IF THE VALUE AND INDEX ARE OPPOSITE AND EQUAL, THAT MEDUSAS IS OUT.  
      $("#" + i).removeClass(imgClasses[i]).addClass(stoneClasses[i]).fadeOut(4000);
      //The out medusas are removed from the array
      //     .pop();
    }
  }
};



// var checkForWin = function() {
//     if (medusas.length === 1 || medusas[0] === )
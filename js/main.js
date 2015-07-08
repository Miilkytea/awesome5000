console.log('activate framework!');

//////GLOBAL VARIABLES/////

var userSelectionObj = {
  out: false
};

var oneSelectionObj = {
  out: false
};
var twoSelectionObj = {
  out: false
};

var gameOn = true;

var count = 3;

///create function to eliminate the losers

var lose = function(oneChoice, twoChoice, userChoice) {
  if (oneChoice === "two" && twoChoice === "one") {
    oneSelectionObj.out = true;
    twoSelectionObj.out = true;
    console.log(oneSelectionObj);
    console.log(twoSelectionObj);
    //console.log("one and two are out!");
    return "one and two are out";
  } else if (oneChoice === "user" && userChoice === "one") {
    oneSelectionObj.out = true;
    userSelectionObj.out = true;
    console.log(oneSelectionObj);
    console.log(userSelectionObj);
    //console.log("one and user are out!");
    return "one and user are out";
  } else if (userChoice === "two" && twoChoice === "user") {
    userSelectionObj.out = true;
    twoSelectionObj.out = true;
    console.log(userSelectionObj);
    console.log(twoSelectionObj);
    //console.log("user and two are out!");
    return "user and two are out";
  } else {
    return false;
  }
};

//create a function that says the game is over make arrays for an
//itiration 
var endGame = function() {
  if (count === 1) {
    gameOn = false;
    return gameOn;
  } else {
    return true;
  }

};

//create function that fades the losers away from the screen
//remove class and added the Stone losing class
var fade = function(loserOne, loserTwo) {
  if (oneSelectionObj.out === true) {
    $("#one").fadeOut("slow");
    count -= 1;
  }
  if (twoSelectionObj.out === true) {
    $("#two").removeClass("loadTwo").addClass("stoneTwo");
    $("#two").fadeOut(3000);

    count -= 1;
  }
  if (userSelectionObj.out === true) {
    $("#user").fadeOut(3000, function() {
      console.log($("#user"));
      $("#user").css({
        "background-color": "black"
      });
    });
    count -= 1;
  }
};

//user selects a square

//make boxes into buttons with onlick event
//$('one').click(function(){})

///button 1
var oneButton = $('#one');
oneButton.click(function() {


  var userSelection = "one";
  console.log('user chose ' + userSelection);

  var oneSelection = Math.floor((Math.random() * 10) + 1);
  if (oneSelection < 5) {
    oneSelection = "two";
  } else {
    oneSelection = "user";
  }
  console.log("one chose " + oneSelection);



  var twoSelection = Math.floor((Math.random() * 10) + 1);
  if (twoSelection < 5) {
    twoSelection = "one";
  } else {
    twoSelection = "user";
  }

  console.log("two chose " + twoSelection);

  lose(oneSelection, twoSelection, userSelection);
  fade();
  endGame();


});



///button 2
var twoButton = $('#two');
twoButton.click(function() {


  var userSelection = "two";
  console.log('user chose ' + userSelection);

  var oneSelection = Math.floor((Math.random() * 10) + 1);
  if (oneSelection < 5) {
    oneSelection = "two";
  } else {
    oneSelection = "user";
  }
  console.log("one chose " + oneSelection);



  var twoSelection = Math.floor((Math.random() * 10) + 1);
  if (twoSelection < 5) {
    twoSelection = "one";
  } else {
    twoSelection = "user";
  }

  console.log("two chose " + twoSelection);

  lose(oneSelection, twoSelection, userSelection);
  fade();
  endGame();

});




//ose();

//var fade = function() {}


// $("body").click(function(event) {
//   console.log("clicked: " + fadeOut.);
// });
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

var threeSelectionObj = {
  out: false
};

var fourSelectionObj = {
  out: false
};


var gameOn = true;

var count = 4;

// // //create function that grabs the elements of gorgon and will check the count
// var gameStatus = function() {
//   var children = document.getElementById("creatures").nodesByClass;
//   console.log(children);
//   // if (mom === 1) {
//   //   gameOn = false;
//   //   return false;
//   // } else {
//   //   gameOn = true;
//   //   return true;
//   // }
// };

///create function to eliminate the losers
var lose = function(oneChoice, twoChoice, threeChoice, fourChoice, userChoice) {
  if (oneChoice === "two" && twoChoice === "one") {
    oneSelectionObj.out = true;
    twoSelectionObj.out = true;
    console.log(oneSelectionObj);
    console.log(twoSelectionObj);
    console.log("one and two are out!");
    return "one and two are out";
  } else if (oneChoice === "user" && userChoice === "one") {
    oneSelectionObj.out = true;
    userSelectionObj.out = true;
    console.log(oneSelectionObj);
    console.log(userSelectionObj);
    console.log("one and user are out!");
    return "one and user are out";
  } else if (userChoice === "two" && twoChoice === "user") {
    userSelectionObj.out = true;
    twoSelectionObj.out = true;
    console.log(userSelectionObj);
    console.log(twoSelectionObj);
    console.log("user and two are out!");
    return "user and two are out";
  } else if (userChoice === "three" && threeChoice === "user") {
    threeSelectionObj.out = true;
    userSelectionObj.out = true;
    console.log(userSelectionObj);
    console.log(threeSelectionObj);
    console.log("user and three are out!");
    return "user and three are out";
  } else if (oneChoice === "three" && threeChoice === "one") {
    threeSelectionObj.out = true;
    oneSelectionObj.out = true;
    console.log(oneSelectionObj);
    console.log(threeSelectionObj);
    console.log("one and three are out!");
    return "one and three are out";
  } else if (twoChoice === "three" && threeChoice === "two") {
    threeSelectionObj.out = true;
    twoSelectionObj.out = true;
    console.log(threeSelectionObj);
    console.log(twoSelectionObj);
    console.log("two and three are out!");
    return "two and three are out";
  } else if (userChoice === "four" && fourChoice === "user") {
    fourSelectionObj.out = true;
    userSelectionObj.out = true;
    console.log(userSelectionObj);
    console.log(fourSelectionObj);
    console.log("user and four are out!");
    return "user and four are out";
  } else if (oneChoice === "four" && fourChoice === "one") {
    fourSelectionObj.out = true;
    oneSelectionObj.out = true;
    console.log(oneSelectionObj);
    console.log(fourSelectionObj);
    console.log("one and four are out!");
    return "one and four are out";
  } else if (twoChoice === "four" && fourChoice === "two") {
    fourSelectionObj.out = true;
    twoSelectionObj.out = true;
    console.log(threeSelectionObj);
    console.log(twoSelectionObj);
    console.log("two and four are out!");
    return "two and four are out";
  } else if (threeChoice === "four" && fourChoice === "three") {
    threeSelectionObj.out = true;
    fourSelectionObj.out = true;
    console.log(threeSelectionObj);
    console.log(fourSelectionObj);
    console.log("three and four are out!");
    return "three and four are out";
  } else {
    return false;
  }
};

// //create a function that says the game is over make arrays for an
// //itiration 
// var endGame = function() {
//   if (count === 1) {
//     gameOn = false;
//     return gameOn;
//   } else {
//     return true;
//   }

// };

//create function that fades the losers away from the screen
//remove class and added the Stone losing class
var fade = function(loserOne, loserTwo) {
  if (oneSelectionObj.out === true) {
    $("#one").removeClass("oneLoad").addClass("stoneOne");
    $("#one").fadeOut(4000);


  }
  if (twoSelectionObj.out === true) {
    $("#two").removeClass("twoLoad").addClass("stoneTwo");
    $("#two").fadeOut(4000);

  }
  if (threeSelectionObj.out === true) {
    $("#three").removeClass("threeLoad").addClass("stoneThree");
    $("#three").fadeOut(4000);

  }
  if (fourSelectionObj.out === true) {
    $("#four").removeClass("fourLoad").addClass("stoneFour");
    $("#four").fadeOut(4000);


  }
  if (userSelectionObj.out === true) {
    $("#user").removeClass("userLoad").addClass("stoneUser");
    $("#user").fadeOut(4000);

  }


};





//the welcome screen provides the directions to the game
//the user clocks to make the screen disappear.

$("#welcomeIntro").on('click', function() {
  $(this).fadeOut(0);
});


///button 1
//$('one').click(function(){})
var oneButton = $('#one');
oneButton.click(function() {


  var userSelection = "one";
  console.log('user chose ' + userSelection);

  var oneSelection = Math.floor((Math.random() * 40) + 1);
  if (oneSelection <= 10) {
    oneSelection = "two";
  } else if (oneSelection <= 20) {
    oneSelection = "user";
  } else if (oneSelection <= 30) {
    oneSelection = "four";
  } else {
    oneSelection = "three";
  }
  console.log("one chose " + oneSelection);



  var twoSelection = Math.floor((Math.random() * 40) + 1);
  if (twoSelection <= 10) {
    twoSelection = "one";
  } else if (twoSelection <= 20) {
    twoSelection = "four";
  } else if (twoSelection <= 30) {
    twoSelection = "user";
  } else {
    twoSelection = "three";
  }

  console.log("two chose " + twoSelection);

  var threeSelection = Math.floor((Math.random() * 40) + 1);
  if (threeSelection <= 10) {
    threeSelection = "one";
  } else if (threeSelection <= 20) {
    threeSelection = "user";
  } else if (threeSelection <= 30) {
    threeSelection = "two";
  } else {
    threeSelection = "four";
  }

  console.log("three chose " + threeSelection);


  var fourSelection = Math.floor((Math.random() * 40) + 1);
  if (fourSelection <= 10) {
    fourSelection = "three";
  } else if (fourSelection <= 20) {
    fourSelection = "one";
  } else if (fourSelection <= 30) {
    fourSelection = "user";
  } else {
    fourSelection = "two";
  }
  console.log("one chose " + oneSelection);


  lose(oneSelection, twoSelection, userSelection, threeSelection);
  fade();


});




///button 2
var twoButton = $('#two');
twoButton.click(function() {


  var userSelection = "two";
  console.log('user chose ' + userSelection);

  var oneSelection = Math.floor((Math.random() * 40) + 1);
  if (oneSelection <= 10) {
    oneSelection = "two";
  } else if (oneSelection <= 20) {
    oneSelection = "four";
  } else if (oneSelection <= 30) {
    oneSelection = "user";
  } else {
    oneSelection = "three";
  }
  console.log("one chose " + oneSelection);



  var twoSelection = Math.floor((Math.random() * 40) + 1);
  if (twoSelection <= 10) {
    twoSelection = "one";
  } else if (twoSelection <= 20) {
    twoSelection = "four";
  } else if (twoSelection <= 30) {
    twoSelection = "three";
  } else {
    twoSelection = "user";
  }
  console.log("two chose " + twoSelection);


  var threeSelection = Math.floor((Math.random() * 40) + 1);
  if (threeSelection <= 10) {
    threeSelection = "one";
  } else if (threeSelection <= 20) {
    threeSelection = "user";
  } else if (threeSelection <= 30) {
    threeSelection = "two";
  } else {
    threeSelection = "four";
  }

  console.log("three chose " + threeSelection);

  var fourSelection = Math.floor((Math.random() * 40) + 1);
  if (fourSelection <= 10) {
    fourSelection = "two";
  } else if (fourSelection <= 20) {
    fourSelection = "one";
  } else if (fourSelection <= 30) {
    fourSelection = "three";
  } else {
    fourSelection = "user";
  }

  console.log("three chose " + threeSelection);

  lose(oneSelection, twoSelection, userSelection, threeSelection);
  fade();


});

///button 3
var threeButton = $('#three');
threeButton.click(function() {


  var userSelection = "three";
  console.log('user chose ' + userSelection);

  var oneSelection = Math.floor((Math.random() * 40) + 1);
  if (oneSelection <= 10) {
    oneSelection = "four";
  } else if (oneSelection <= 20) {
    oneSelection = "user";
  } else if (oneSelection <= 30) {
    oneSelection = "three";
  } else {
    oneSelection = "two";
  }

  console.log("one chose " + oneSelection);



  var twoSelection = Math.floor((Math.random() * 40) + 1);
  if (twoSelection <= 10) {
    twoSelection = "one";
  } else if (twoSelection <= 20) {
    twoSelection = "user";
  } else if (fourSelection <= 30) {
    twoSelection = "four";
  } else {
    twoSelection = "three";
  }

  console.log("two chose " + twoSelection);

  var threeSelection = Math.floor((Math.random() * 40) + 1);
  if (threeSelection <= 10) {
    threeSelection = "one";
  } else if (threeSelection <= 20) {
    threeSelection = "user";
  } else if (threeSelection <= 30) {
    threeSelection = "two";
  } else {
    threeSelection = "four";
  }
  console.log("three chose " + threeSelection);


  var fourSelection = Math.floor((Math.random() * 40) + 1);
  if (fourSelection <= 10) {
    fourSelection = "user";
  } else if (fourSelection <= 20) {
    fourSelection = "two";
  } else if (fourSelection <= 30) {
    fourSelection = "three";
  } else {
    fourSelection = "one";
  }
  console.log("four chose " + oneSelection);


  lose(oneSelection, twoSelection, userSelection, threeSelection);
  fade();


});


///button 4
var fourButton = $('#four');
fourButton.click(function() {


  var userSelection = "four";
  console.log('user chose ' + userSelection);

  var oneSelection = Math.floor((Math.random() * 40) + 1);
  if (oneSelection <= 10) {
    oneSelection = "user";
  } else if (oneSelection <= 20) {
    oneSelection = "two";
  } else if (oneSelection <= 30) {
    oneSelection = "four";
  } else {
    oneSelection = "three";
  }
  console.log("one chose " + oneSelection);



  var twoSelection = Math.floor((Math.random() * 40) + 1);
  if (twoSelection <= 10) {
    twoSelection = "one";
  } else if (twoSelection <= 20) {
    twoSelection = "four";
  } else if (twoSelection <= 30) {
    twoSelection = "user";
  } else {
    twoSelection = "three";
  }

  console.log("two chose " + twoSelection);

  var threeSelection = Math.floor((Math.random() * 40) + 1);
  if (threeSelection <= 10) {
    threeSelection = "four";
  } else if (threeSelection <= 20) {
    threeSelection = "user";
  } else if (threeSelection <= 30) {
    threeSelection = "two";
  } else {
    threeSelection = "one";
  }

  console.log("three chose " + threeSelection);


  var fourSelection = Math.floor((Math.random() * 40) + 1);
  if (fourSelection <= 10) {
    fourSelection = "three";
  } else if (fourSelection <= 20) {
    fourSelection = "one";
  } else if (fourSelection <= 30) {
    fourSelection = "user";
  } else {
    fourSelection = "two";
  }
  console.log("four chose " + oneSelection);


  lose(oneSelection, twoSelection, userSelection, threeSelection);
  fade();


});
console.log('activate framework!');

//////GLOBAL VARIABLES/////

var losers = 0;

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
    console.log(fourSelectionObj);
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
    losers++;
  }

  if (twoSelectionObj.out === true) {
    $("#two").removeClass("twoLoad").addClass("stoneTwo");
    $("#two").fadeOut(4000);
    losers++;
  }

  if (threeSelectionObj.out === true) {
    $("#three").removeClass("threeLoad").addClass("stoneThree");
    $("#three").fadeOut(4000);
    losers++;
  }

  if (fourSelectionObj.out === true) {
    $("#four").removeClass("fourLoad").addClass("stoneFour");
    $("#four").fadeOut(4000);
    losers++;
  }

  if (userSelectionObj.out === true) {
    $("#user").removeClass("userLoad").addClass("stoneUser");
    $("#user").fadeOut(4000);
    losers++;
  }


};

///end the game
var endGame = function() {
  if (losers === 4 || userSelectionObj.out === true) {
    if (losers === 4 && userSelectionObj === false) {
      console.log("YOU WIN!");
    } else if (userSelectionObj.out === true) {
      console.log("YOU LOSE!");
    }
    gameOn = false;
    console.log("GAME OVER");

  }
};





//the welcome screen provides the directions to the game
//the user clocks to make the screen disappear.

$("#welcomeIntro").on('click', function() {
  $(this).fadeOut(0);
});

/////////button 1
//$('one').click(function(){})
var oneButton = $('#one');
oneButton.click(function() {


  var userSelection = "one";
  console.log('user chose ' + userSelection); //not working

  if (oneSelectionObj.out === false) {
    var oneSelection = Math.floor((Math.random() * 40) + 1);
    if (oneSelection <= 10 && twoSelectionObj.out === false) {
      oneSelection = "two";
    } else if (oneSelection <= 20 && userSelectionObj.out === false) { //not working
      oneSelection = "user";
    } else if (oneSelection <= 30 && fourSelectionObj.out === false) {
      oneSelection = "four";
    } else if (threeSelectionObj.out === false) {
      oneSelection = "three";
    } else {

    }
    console.log("one chose " + oneSelection);
  }

  if (twoSelectionObj.out === false) {
    var twoSelection = Math.floor((Math.random() * 40) + 1);
    if (twoSelection <= 10 && oneSelectionObj.out === false) {
      twoSelection = "one";
    } else if (twoSelection <= 20 && fourSelectionObj.out === false) {
      twoSelection = "four";
    } else if (twoSelection <= 30 && userSelectionObj.out === false) {
      twoSelection = "user";
    } else if (threeSelectionObj.out === false) {
      twoSelection = "three";
    } else {
      return null;
    }

    console.log("two chose " + twoSelection);
  }

  if (threeSelectionObj.out === false) {
    var threeSelection = Math.floor((Math.random() * 40) + 1);
    if (threeSelection <= 10 && oneSelectionObj.out === false) {
      threeSelection = "one";
    } else if (threeSelection <= 20 && userSelectionObj.out === false) {
      threeSelection = "user";
    } else if (threeSelection <= 30 && twoSelectionObj.out === false) {
      threeSelection = "two";
    } else if (fourSelectionObj.out === false) {
      threeSelection = "four";
    } else {
      return null;
    }

    console.log("three chose " + threeSelection);
  }

  if (fourSelectionObj.out === false) {
    var fourSelection = Math.floor((Math.random() * 40) + 1);
    if (fourSelection <= 10 && threeSelectionObj.out === false) {
      fourSelection = "three";
    } else if (fourSelection <= 20 && oneSelectionObj.out === false) {
      fourSelection = "one";
    } else if (fourSelection <= 30 && userSelectionObj.out === false) {
      fourSelection = "user";
    } else if (twoSelectionObj.out === false) {
      fourSelection = "two";
    } else {
      return null;

    }
    console.log("four chose " + fourSelection);
  }

  lose(oneSelection, twoSelection, userSelection, threeSelection, fourSelection);
  fade();
  endGame();

});




///button 2
var twoButton = $('#two');
twoButton.click(function() {


  var userSelection = "two";
  console.log('user chose ' + userSelection);

  if (oneSelectionObj.out === false) {
    var oneSelection = Math.floor((Math.random() * 40) + 1);
    if (oneSelection <= 10 && twoSelectionObj.out === false) {
      oneSelection = "two";
    } else if (oneSelection <= 20 && fourSelectionObj.out === false) {
      oneSelection = "four";
    } else if (oneSelection <= 30 && userSelectionObj.out === false) {
      oneSelection = "user";
    } else if (threeSelectionObj.out === false) {
      oneSelection = "three";

    }
    console.log("one chose " + oneSelection);
  }

  if (twoSelectionObj.out === false) {
    var twoSelection = Math.floor((Math.random() * 40) + 1);
    if (twoSelection <= 10 && oneSelectionObj.out === false) {
      twoSelection = "one";
    } else if (twoSelection <= 20 && fourSelectionObj.out === false) {
      twoSelection = "four";
    } else if (twoSelection <= 30 && threeSelectionObj.out === false) { //works
      twoSelection = "three";
    } else if (userSelectionObj.out === false) {
      twoSelection = "user";
    } else {
      return null;
    }

    console.log("two chose " + twoSelection);
  }

  if (threeSelectionObj.out === false) {

    var threeSelection = Math.floor((Math.random() * 40) + 1);
    if (threeSelection <= 10 && oneSelectionObj.out === false) {
      threeSelection = "one";
    } else if (threeSelection <= 20 && userSelectionObj.out === false) {
      threeSelection = "user";
    } else if (threeSelection <= 30 && twoSelectionObj.out === false) { //works
      threeSelection = "two";
    } else if (fourSelectionObj.out === false) {
      threeSelection = "four";
    } else {
      return null;
    }

    console.log("three chose " + threeSelection);
  }

  if (fourSelectionObj.out === false) {
    var fourSelection = Math.floor((Math.random() * 40) + 1);
    if (fourSelection <= 10 && twoSelectionObj.out === false) {
      fourSelection = "two";
    } else if (fourSelection <= 20 && oneSelectionObj.out === false) {
      fourSelection = "one";
    } else if (fourSelection <= 30 && threeSelectionObj.out === false) {
      fourSelection = "three";
    } else if (userSelectionObj.out === false) {
      fourSelection = "user";
    } else {
      return null;
    }

    console.log("four chose " + fourSelection);
  }
  lose(oneSelection, twoSelection, userSelection, threeSelection, fourSelection);
  fade();
  endGame();

});

///button 3
var threeButton = $('#three');
threeButton.click(function() {


  var userSelection = "three";
  console.log('user chose ' + userSelection);

  if (oneSelectionObj.out === false) {
    var oneSelection = Math.floor((Math.random() * 40) + 1);
    if (oneSelection <= 10 && fourSelectionObj.out === false) {
      oneSelection = "four";
    } else if (oneSelection <= 20 && userSelectionObj.out === false) {
      oneSelection = "user";
    } else if (oneSelection <= 30 && threeSelectionObj.out === false) {
      oneSelection = "three";
    } else if (twoSelectionObj.out === false) {
      oneSelection = "two";
    } else {
      return null;
    }

    console.log("one chose " + oneSelection);
  }

  if (twoSelectionObj.out === false) {
    var twoSelection = Math.floor((Math.random() * 40) + 1);
    if (twoSelection <= 10 && oneSelectionObj.out === false) {
      twoSelection = "one";
    } else if (twoSelection <= 20 && userSelectionObj.out === false) {
      twoSelection = "user";
    } else if (fourSelection <= 30 && fourSelectionObj.out === false) {
      twoSelection = "four";
    } else if (threeSelectionObj.out === false) {
      twoSelection = "three";
    } else {
      return null;
    }

    console.log("two chose " + twoSelection);
  }

  if (threeSelectionObj.out === false) {
    var threeSelection = Math.floor((Math.random() * 40) + 1);
    if (threeSelection <= 10 && oneSelectionObj.out === false) {
      threeSelection = "one";
    } else if (threeSelection <= 20 && userSelectionObj.out === false) {
      threeSelection = "user";
    } else if (threeSelection <= 30 && twoSelectionObj.out === false) {
      threeSelection = "two";
    } else if (fourSelectionObj.out === false) {
      threeSelection = "four";
    } else {
      return null;
    }
    console.log("three chose " + threeSelection);
  }

  if (fourSelectionObj.out === false) {
    var fourSelection = Math.floor((Math.random() * 40) + 1);
    if (fourSelection <= 10 && userSelectionObj.out === false) {
      fourSelection = "user";
    } else if (fourSelection <= 20 && twoSelectionObj.out === false) {
      fourSelection = "two";
    } else if (fourSelection <= 30 && threeSelectionObj.out === false) {
      fourSelection = "three";
    } else if (oneSelectionObj.out === false) {
      fourSelection = "one";
    } else {
      return null;
    }
    console.log("four chose " + fourSelection);
  }

  lose(oneSelection, twoSelection, userSelection, threeSelection, fourSelection);
  fade();
  endGame();

});


///button 4
var fourButton = $('#four');
fourButton.click(function() {


  var userSelection = "four";
  console.log('user chose ' + userSelection); //not working


  if (oneSelectionObj.out === false) {
    var oneSelection = Math.floor((Math.random() * 40) + 1);
    if (oneSelection <= 10 && userSelectionObj.out === false) {
      oneSelection = "user";
    } else if (oneSelection <= 20 && twoSelectionObj.out === false) {
      oneSelection = "two";
    } else if (oneSelection <= 30 && fourSelectionObj.out === false) { //works
      oneSelection = "four";
    } else if (threeSelectionObj.out === false) {
      oneSelection = "three";
    } else {
      return null;
    }
    console.log("one chose " + oneSelection);
  }

  if (twoSelectionObj.out === false) {
    var twoSelection = Math.floor((Math.random() * 40) + 1);
    if (twoSelection <= 10 && oneSelectionObj.out === false) {
      twoSelection = "one";
    } else if (twoSelection <= 20 && fourSelectionObj.out === false) {
      twoSelection = "four";
    } else if (twoSelection <= 30 && userSelectionObj.out === false) {
      twoSelection = "user";
    } else if (threeSelectionObj.out === false) { //not working
      twoSelection = "three";
    } else {
      return null;
    }

    console.log("two chose " + twoSelection);
  }

  if (threeSelectionObj.out === false) {
    var threeSelection = Math.floor((Math.random() * 40) + 1);
    if (threeSelection <= 10 && fourSelectionObj.out === false) {
      threeSelection = "four";
    } else if (threeSelection <= 20 && userSelectionObj.out === false) {
      threeSelection = "user";
    } else if (threeSelection <= 30 && twoSelectionObj.out === false) { //not working
      threeSelection = "two";
    } else if (oneSelectionObj.out === false) {
      threeSelection = "one";
    } else {
      return null;
    }

    console.log("three chose " + threeSelection);

  }

  if (fourSelectionObj.out === false) {
    var fourSelection = Math.floor((Math.random() * 40) + 1);
    if (fourSelection <= 10 && threeSelectionObj.out === false) {
      fourSelection = "three";
    } else if (fourSelection <= 20 && oneSelectionObj.out === false) { //works
      fourSelection = "one";
    } else if (fourSelection <= 30 && userSelectionObj.out === false) { //not working
      fourSelection = "user";
    } else if (twoSelectionObj.out === false) {
      fourSelection = "two";
    } else {
      return null;
    }
    console.log("four chose " + fourSelection);
  }

  lose(oneSelection, twoSelection, userSelection, threeSelection, fourSelection);
  fade();
  endGame();


});
console.log('activate framework!');

//////GLOBAL VARIABLES/////

var userSelection = {
  out: false
};

var oneSelection = {
  out: false
};
var twoSelection = {
  out: false
};


///create function to elimiate the losers

var lose = function(oneChoice, twoChoice, userChoice) {
  if (oneChoice === "two" && twoChoice === "one") {
    oneSelection.out = true;
    twoSelection.out = true;
    //console.log("one and two are out!");
    return "one and two are out";
  } else if (oneChoice === "user" && userChoice === "one") {
    oneSelection.out = true;
    userSelection.out = true;
    //console.log("one and user are out!");
    return "one and two are out";
  } else if (userChoice === "two" && twoChoice === "user") {
    userSelection.out = true;
    twoSelection.out = true;
    //console.log("user and two are out!");
    return "one and two are out";
  } else {
    return false;
  }
};

var fade = function(loserOne, loserTwo)
if

//user selects a square

//make boxes into buttons with onlick event
//$('one').click(function(){})

///button 1
var oneButton = $('#one');
oneButton.click(function() {


  userSelection = "one";
  console.log('user chose ' + userSelection);

  oneSelection = Math.floor((Math.random() * 10) + 1);
  if (oneSelection < 5) {
    oneSelection = "two";
  } else {
    oneSelection = "user";
  }
  console.log("one chose " + oneSelection);



  twoSelection = Math.floor((Math.random() * 10) + 1);
  if (twoSelection < 5) {
    twoSelection = "one";
  } else {
    twoSelection = "user";
  }

  console.log("two chose " + twoSelection);

  lose(oneSelection, twoSelection, userSelection);

});



///button 2
var twoButton = $('#two');
twoButton.click(function() {


  userSelection = "two";
  console.log('user chose ' + userSelection);

  oneSelection = Math.floor((Math.random() * 10) + 1);
  if (oneSelection < 5) {
    oneSelection = "two";
  } else {
    oneSelection = "user";
  }
  console.log("one chose " + oneSelection);



  twoSelection = Math.floor((Math.random() * 10) + 1);
  if (twoSelection < 5) {
    twoSelection = "one";
  } else {
    twoSelection = "user";
  }

  console.log("two chose " + twoSelection);

  lose(oneSelection, twoSelection, userSelection);
});




//ose();

//var fade = function() {}


// $("body").click(function(event) {
//   console.log("clicked: " + fadeOut.);
// });
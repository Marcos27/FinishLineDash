$('.nextToGame').click(function() {
  console.log(player1TeamName , player2TeamName)
  $('.iconPickerMain').fadeOut(5000)
});

//This is the start of the Game srceen it
//will say Lets play and slide the option too
//to play on the screen
$('.letsPlay').slideUp(0)
$('.letsPlay').slideDown(4000)
  $('.startBtn').slideUp(2000)
  $('.startBtn').fadeIn(4000)

//
$('.startBtn').click(function() {
  $('.letsPlayMain').fadeOut(3000)
    $('.iconHolder').slideUp(0)
  $('.iconHolder').slideDown(4000)
  });
//<------------END of code------------------->

//This will Zoom the Icon picture, when the play click the
//icon they want.
$('.zoomIcon1').hide(0)
$('.zoomIcon2').hide(0)
$('.zoomIcon3').hide(0)
$('.zoomIcon4').hide(0)
var teamsel = "player1";
var player1TeamName;
var player2TeamName;
var IconZOO;
var IconZOO2;
$('.fristIcon').click(function() {
  if(teamsel == "player1"){
    player1TeamName = "Pink Dolphin";
    IconZOO = 'zoomIcon1Finish'
    teamsel = "player2"
  }else if(teamsel == "player2"){
    player2TeamName = "Pink Dolphin"
    IconZOO2 = 'zoomIcon1Finish'
    teamsel = null
  }
  console.log(player1TeamName , player2TeamName);
  $('.fristIcon').addClass('clickIcon')
  $('.zoomIcon1').toggle(1000)
    $('.zoomIcon1').toggle(2000)
  $('.clickIcon').click(function(){
 $('.fristIcon').removeClass('clickIcon')
  })
});

$('.secondIcon').click(function() {
   if(teamsel == "player1"){
    player1TeamName = "Mr. Meme";
    IconZOO = 'zoomIcon2Finish'
    teamsel = "player2"
  }else if(teamsel == "player2"){
    player2TeamName = "Mr. Meme"
     IconZOO2 = 'zoomIcon2Finish'
    teamsel = null
  }
  $('.secondIcon').addClass('clickIcon')
  $('.zoomIcon2').toggle(1000)
    $('.zoomIcon2').toggle(2000)
  $('.clickIcon').click(function(){
 $('.secondIcon').removeClass('clickIcon')
  })
});

$('.Icon3').click(function() {
   if(teamsel == "player1"){
    player1TeamName = "Shia Labeouf";
     IconZOO = 'zoomIcon3Finish'
    teamsel = "player2"
  }else if(teamsel == "player2"){
    player2TeamName = "Shia Labeouf"
     IconZOO2 = 'zoomIcon3Finish'
    teamsel = null
  }
  $('.Icon3').addClass('clickIcon')
  $('.zoomIcon3').toggle(1000)
    $('.zoomIcon3').toggle(3000)
  $('.clickIcon').click(function(){
 $('.Icon3').removeClass('clickIcon')
  })
});

$('.Icon4').click(function() {
  if(teamsel == "player1"){
    player1TeamName = "Spongebob";
     IconZOO = 'zoomIcon4Finish'
    teamsel = "player2"
  }else if(teamsel == "player2"){
    player2TeamName = "Spongebob"
     IconZOO2 = 'zoomIcon4Finish'
    teamsel = null
  }
  $('.Icon4').addClass('clickIcon')
  $('.zoomIcon4').toggle(1000)
    $('.zoomIcon4').fadeOut(3000)
  $('.clickIcon').click(function(){
 $('.Icon4').removeClass('clickIcon')
  })
});
//<------------END of code------------------->

$('.pointerF').hide(0)
$('.Team1Display').hide(0)
$('.Team2Display').hide(0)
$('.Team1winner').hide(0)
$('.Team2winner').hide(0)
$('.right').hide(0)
$('.wrong').hide(0)

for(i = 0 ; i <= 40; i++){

  $('.question' + [i]).hide(0)
}





var secMove;
var moveTooSpace;
var UPDATES_PER_SECOND = 60
var DISTANCE_BET_BOX = 75
var isAnswerRight;
var userName;


function spinnerBtn() {

 questionPOP()
console.log("is my questionPOP running")



if(isAnswerRight){
  console.log("i need this too run")
var spinner = Math.random();

  if(spinner <= 0.53 ){
    moveTooSpace = 1
    secMove = 1250;
    $('.cell1').addClass('chBtn');
    console.log('spot 1');
    take()
  }else if(spinner <= 0.86 ){
    moveTooSpace = 2
    secMove = 2500;
    $('.cell2').addClass('chBtn')
    console.log('spot 2');
     take()
  }else{
    moveTooSpace = 3
    secMove = 5000;
    $('.cell3').addClass('chBtn')
    console.log('spot 3');
  take()
  }


}
  console.log(spinner);


  setTimeout(function(){
    console.log("was this click right")
  $('.chBtn').removeClass('chBtn')
}, 1000)

}

//<------------END of code------------------->
//<----------1 QUESTIONS--------------------->
$('.question1 .answer1').click(function() {
  $('.question1').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question1 .answer2').click(function() {
  $('.question1').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
 take()
});

$('.question1 .answer3').click(function() {
  $('.question1').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
 take()
});

//<------------END of code------------------->
//<----------2 QUESTIONS--------------------->
$('.question2 .answer1').click(function() {
  $('.question2').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});


$('.question2 .answer2').click(function() {
  $('.question2').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
 take()
});

$('.question2 .answer3').click(function() {
  $('.question2').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true

});

//<------------END of code------------------->
//<----------3 QUESTIONS--------------------->

$('.question3 .answer1').click(function() {
  $('.question3').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question3 .answer2').click(function() {
  $('.question3').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true

});

$('.question3 .answer3').click(function() {
  $('.question3').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
 take()
});

//<------------END of code------------------->
//<----------4 QUESTIONS--------------------->

$('.question4 .answer1').click(function() {
  $('.question4').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question4 .answer2').click(function() {
  $('.question4').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question4 .answer3').click(function() {
  $('.question4').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
 take()
});

//<------------END of code------------------->
//<----------5 QUESTIONS--------------------->

$('.question5 .answer1').click(function() {
  $('.question5').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question5 .answer2').click(function() {
  $('.question5').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question5 .answer3').click(function() {
  $('.question5').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------6 QUESTIONS--------------------->

$('.question6 .answer1').click(function() {
  $('.question6').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question6 .answer2').click(function() {
  $('.question6').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question6 .answer3').click(function() {
  $('.question6').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

//<------------END of code------------------->

//<----------7 QUESTIONS--------------------->

$('.question7 .answer1').click(function() {
  $('.question7').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question7 .answer2').click(function() {
  $('.question7').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question7 .answer3').click(function() {
  $('.question7').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------8 QUESTIONS--------------------->

$('.question8 .answer1').click(function() {
  $('.question8').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question8 .answer2').click(function() {
  $('.question8').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question8 .answer3').click(function() {
  $('.question8').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------9 QUESTIONS--------------------->

$('.question9 .answer1').click(function() {
  $('.question9').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question9 .answer2').click(function() {
  $('.question9').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question9 .answer3').click(function() {
  $('.question9').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

//<------------END of code------------------->

//<----------10 QUESTIONS--------------------->

$('.question10 .answer1').click(function() {
  $('.question10').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question10 .answer2').click(function() {
  $('.question10').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question10 .answer3').click(function() {
  $('.question10').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->


//<----------11 QUESTIONS--------------------->

$('.question11 .answer1').click(function() {
  $('.question11').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question11 .answer2').click(function() {
  $('.question11').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question11 .answer3').click(function() {
  $('.question11').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------12 QUESTIONS--------------------->

$('.question12 .answer1').click(function() {
  $('.question12').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question12 .answer2').click(function() {
  $('.question12').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question12 .answer3').click(function() {
  $('.question12').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

//<------------END of code------------------->

//<----------13 QUESTIONS--------------------->

$('.question13 .answer1').click(function() {
  $('.question13').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question13 .answer2').click(function() {
  $('.question13').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question13 .answer3').click(function() {
  $('.question13').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------14 QUESTIONS--------------------->

$('.question14 .answer1').click(function() {
  $('.question14').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question14 .answer2').click(function() {
  $('.question14').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question14 .answer3').click(function() {
  $('.question14').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------15 QUESTIONS--------------------->

$('.question15 .answer1').click(function() {
  $('.question15').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question15 .answer2').click(function() {
  $('.question15').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question15 .answer3').click(function() {
  $('.question15').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------16 QUESTIONS--------------------->

$('.question16 .answer1').click(function() {
  $('.question16').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question16 .answer2').click(function() {
  $('.question16').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question16 .answer3').click(function() {
  $('.question16').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------17 QUESTIONS--------------------->

$('.question17 .answer1').click(function() {
  $('.question17').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question17 .answer2').click(function() {
  $('.question17').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question17 .answer3').click(function() {
  $('.question17').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------18 QUESTIONS--------------------->

$('.question18 .answer1').click(function() {
  $('.question18').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question18 .answer2').click(function() {
  $('.question18').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question18 .answer3').click(function() {
  $('.question18').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------19 QUESTIONS--------------------->

$('.question19 .answer1').click(function() {
  $('.question19').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question19 .answer2').click(function() {
  $('.question19').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question19 .answer3').click(function() {
  $('.question19').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

//<------------END of code------------------->
//<----------20 QUESTIONS--------------------->

$('.question20 .answer1').click(function() {
  $('.question20').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question20 .answer2').click(function() {
  $('.question20').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question20 .answer3').click(function() {
  $('.question20').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------21 QUESTIONS--------------------->

$('.question21 .answer1').click(function() {
  $('.question21').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question21 .answer2').click(function() {
  $('.question21').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

$('.question21 .answer3').click(function() {
  $('.question21').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

//<------------END of code------------------->

//<----------22 QUESTIONS--------------------->

$('.question22 .answer1').click(function() {
  $('.question22').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question22 .answer2').click(function() {
  $('.question22').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
isAnswerRight = false
take()
});

$('.question22 .answer3').click(function() {
  $('.question22').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
isAnswerRight = true
});

//<------------END of code------------------->
//<----------23 QUESTIONS--------------------->

$('.question23 .answer1').click(function() {
  $('.question23').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question23 .answer2').click(function() {
  $('.question23').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question23 .answer3').click(function() {
  $('.question25').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------24 QUESTIONS--------------------->

$('.question24 .answer1').click(function() {
  $('.question24').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question24 .answer2').click(function() {
  $('.question24').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question24 .answer3').click(function() {
  $('.question24').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});


//<------------END of code------------------->

//<----------25 QUESTIONS--------------------->

$('.question25 .answer1').click(function() {
  $('.question25').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question25 .answer2').click(function() {
  $('.question25').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question25 .answer3').click(function() {
  $('.question25').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------26 QUESTIONS--------------------->

$('.question26 .answer1').click(function() {
  $('.question26').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question26 .answer2').click(function() {
  $('.question26').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question26 .answer3').click(function() {
  $('.question26').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});
//<------------END of code------------------->

//<----------27 QUESTIONS--------------------->

$('.question27 .answer1').click(function() {
  $('.question27').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question27 .answer2').click(function() {
  $('.question27').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question27 .answer3').click(function() {
  $('.question27').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

//<------------END of code------------------->

//<----------28 QUESTIONS--------------------->

$('.question28 .answer1').click(function() {
  $('.question28').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question28 .answer2').click(function() {
  $('.question28').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question28 .answer3').click(function() {
  $('.question28').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});


//<------------END of code------------------->

//<----------29 QUESTIONS--------------------->

$('.question29 .answer1').click(function() {
  $('.question29').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question29 .answer2').click(function() {
  $('.question29').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question29 .answer3').click(function() {
  $('.question29').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------30 QUESTIONS--------------------->

$('.question30 .answer1').click(function() {
  $('.question30').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question30 .answer2').click(function() {
  $('.question30').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question30 .answer3').click(function() {
  $('.question30').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------31 QUESTIONS--------------------->

$('.question31 .answer1').click(function() {
  $('.question31').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question31 .answer2').click(function() {
  $('.question31').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question31 .answer3').click(function() {
  $('.question31').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

//<------------END of code------------------->

//<----------32 QUESTIONS--------------------->
$('.question32 .answer1').click(function() {
  $('.question32').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question32 .answer2').click(function() {
  $('.question32').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question32 .answer3').click(function() {
  $('.question32').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

//<------------END of code------------------->

//<----------33 QUESTIONS--------------------->

$('.question33 .answer1').click(function() {
  $('.question33').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question33 .answer2').click(function() {
  $('.question33').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question33 .answer3').click(function() {
  $('.question33').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

//<------------END of code------------------->

//<----------34 QUESTIONS--------------------->

$('.question34 .answer1').click(function() {
  $('.question34').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question34 .answer2').click(function() {
  $('.question34').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question34 .answer3').click(function() {
  $('.question34').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------35 QUESTIONS--------------------->

$('.question35 .answer1').click(function() {
  $('.question35').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question35 .answer2').click(function() {
  $('.question35').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question35 .answer3').click(function() {
  $('.question35').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------36 QUESTIONS--------------------->

$('.question36 .answer1').click(function() {
  $('.question36').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question36 .answer2').click(function() {
  $('.question36').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question36 .answer3').click(function() {
  $('.question36').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

//<------------END of code------------------->

//<----------37 QUESTIONS--------------------->

$('.question37 .answer1').click(function() {
  $('.question37').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question37 .answer2').click(function() {
  $('.question37').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question37 .answer3').click(function() {
  $('.question37').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

//<------------END of code------------------->

//<----------38 QUESTIONS--------------------->

$('.question38 .answer1').click(function() {
  $('.question38').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question38 .answer2').click(function() {
  $('.question38').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question38 .answer3').click(function() {
  $('.question38').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//<----------39 QUESTIONS--------------------->

$('.question39 .answer1').click(function() {
  $('.question39').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

$('.question39 .answer2').click(function() {
  $('.question39').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question39 .answer3').click(function() {
  $('.question39').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});
//<------------END of code------------------->

//<----------40 QUESTIONS--------------------->

$('.question40 .answer1').click(function() {
  $('.question40').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question40 .answer2').click(function() {
  $('.question40').slideUp(2000)
  $('.wrong').fadeIn(0)
  $('.wrong').fadeOut(5000)
  isAnswerRight = false
  take()
});

$('.question40 .answer3').click(function() {
  $('.question40').slideUp(2000)
  $('.right').fadeIn(0)
  $('.right').fadeOut(5000)
  isAnswerRight = true
});

//<------------END of code------------------->

//This will pick a random quetion from 1-40
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function questionPOP(){
var randomQuestion = getRandomInt(1, 41)
  $('.question' + randomQuestion ).slideDown(2000)
}
//END OF CODE
var team1 = 0
var team2 = 0
var player = 1
function take () {
  userName = "team 1"
  if (player === 1){
        player = -1
        switchPlayers()
        console.log("player 1 outside")
    if (isAnswerRight){
      team1 += moveTooSpace
       console.log(team1)
      if (team1 >= 10){
        console.log(player2TeamName, player1TeamName);
        $('.Team1winner').html(player1TeamName+ " YOU ARE THE WINNER").addClass(IconZOO)
        $('.Team1winner').fadeIn(0)
        $('#questions').hide()
       }
       console.log("player 1 inside right answer")
      cylinderCube ()
    }
  }
else{
     userName = "team 2"
      player = 1
      switchPlayers()
      console.log("player 2 outside")
    if(isAnswerRight){
      team2 += moveTooSpace
      if (team2 >= 10){
          $('#questions').hide()
          console.log(player2TeamName, player1TeamName);
          $('.Team2winner').html(player2TeamName + " YOU ARE THE WINNER" ).addClass(IconZOO2)
          $('.Team2winner').fadeIn(0)
     }
         console.log("player 2 inside right answer")
          cylinderCube2 ()
   }
 }
}

function switchPlayers(){
  if(player === 1){
    $('.pointerF').fadeIn(0)
    $('.Team1Display').fadeIn(500)
    $('.Team2Display').hide(0)
  }else{
    $('.pointerF').fadeIn(0)
    $('.Team2Display').fadeIn(500)
    $('.Team1Display').hide(0)
  }
}
switchPlayers()

function durationOfMove(distance){
return distance*1000/UPDATES_PER_SECOND * DISTANCE_BET_BOX;
}
      var cylinderMove = 0
      var cylinderMovey = 0
        //var Team1scene = 0
function cylinderCube () {
  cylinderMove =  1
  cylinderMovey =  1
  setTimeout(function () {
    Team1scene = 0
    cylinderMove = 0
    cylinderMovey = 0
  }, durationOfMove(moveTooSpace))
}
var cylinder2Move = 0
var cylinder2Movey = 0
function cylinderCube2 () {
  cylinder2Move =  -1
  cylinder2Movey =  1
  setTimeout(function () {
    cylinder2Move = 0
    cylinder2Movey = 0
  }, durationOfMove(moveTooSpace))
}
var player = 1;
function clickRandombtn() {
  if (player == 1) {
  player -= 1;
  finishLine();
  }else{
  player += 1;
  finishLine();
  }
}









       // setup code
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000 );
      camera.position.z = 1100
      camera.position.y = 200
      camera.position.x = 0


      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );


      // drawing the cylinder
      var geometry = new THREE.CylinderGeometry( 0, 10, 50, 32 );
      var material = new THREE.MeshBasicMaterial({color: "#ce2121"});
      var cylinder = new THREE.Mesh( geometry, material );
      cylinder.rotation.z = 3.14159
      cylinder.position.y = 0
      cylinder.position.x = -775
      scene.add( cylinder );

       // drawing the cylinder2
      var geometry = new THREE.CylinderGeometry( 0, 10, 50, 32 );
      var material = new THREE.MeshBasicMaterial({color: "#0726b9"});
      var cylinder2 = new THREE.Mesh( geometry, material );
      cylinder2.rotation.z = 3.14159
      cylinder2.position.y = 0
      cylinder2.position.x = 775
      scene.add( cylinder2 );

  // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube1 = new THREE.Mesh( geometry, material );
      cube1.rotation.z = 0.0174533
      cube1.position.y = 0
      cube1.position.x = -700

      scene.add( cube1 );


        // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube2 = new THREE.Mesh( geometry, material );
      cube2.rotation.z = 0.0174533
      cube2.position.y = 75
      cube2.position.x = -625

      scene.add( cube2 );

      // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube3 = new THREE.Mesh( geometry, material );
      cube3.rotation.z = 0.0174533
      cube3.position.y = 150
      cube3.position.x = -550
      scene.add( cube3 );


       // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube4 = new THREE.Mesh( geometry, material );
      cube4.rotation.z = 0.0174533
      cube4.position.y = 225
      cube4.position.x = -475

      scene.add( cube4 );

       // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube5 = new THREE.Mesh( geometry, material );
      cube5.rotation.z = 0.0174533
      cube5.position.y = 300
      cube5.position.x = -400

      scene.add( cube5 );


 // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube6 = new THREE.Mesh( geometry, material );
      cube6.rotation.z = 0.0174533
      cube6.position.y = 375
      cube6.position.x = -325

      scene.add( cube6 );


 // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube7 = new THREE.Mesh( geometry, material );
      cube7.rotation.z = 0.0174533
      cube7.position.y = 450
      cube7.position.x = -250

      scene.add( cube7 );


 // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube8 = new THREE.Mesh( geometry, material );
      cube8.rotation.z = 0.0174533
      cube8.position.y = 525
      cube8.position.x = -175

      scene.add( cube8 );


 // draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube9 = new THREE.Mesh( geometry, material );
      cube9.rotation.z = 0.0174533
      cube9.position.y = 600
      cube9.position.x = -100

      scene.add( cube9 );



// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube11 = new THREE.Mesh( geometry, material );
      cube11.rotation.z = 0.0174533
      cube11.position.y = 0
      cube11.position.x = 700

      scene.add( cube11 );


// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube12 = new THREE.Mesh( geometry, material );
      cube12.rotation.z = 0.0174533
      cube12.position.y = 75
      cube12.position.x = 625

      scene.add( cube12 );



// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube13 = new THREE.Mesh( geometry, material );
      cube13.rotation.z = 0.0174533
      cube13.position.y = 150
      cube13.position.x = 550

      scene.add( cube13 );


// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube14 = new THREE.Mesh( geometry, material );
      cube14.rotation.z = 0.0174533
      cube14.position.y = 225
      cube14.position.x = 475

      scene.add( cube14 );


// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube15 = new THREE.Mesh( geometry, material );
      cube15.rotation.z = 0.0174533
      cube15.position.y = 300
      cube15.position.x = 400

      scene.add( cube15 );



// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube16 = new THREE.Mesh( geometry, material );
      cube16.rotation.z = 0.0174533
      cube16.position.y = 375
      cube16.position.x = 325

      scene.add( cube16 );




// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube17 = new THREE.Mesh( geometry, material );
      cube17.rotation.z = 0.0174533
      cube17.position.y = 450
      cube17.position.x = 250

      scene.add( cube17 );




// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube18 = new THREE.Mesh( geometry, material );
      cube18.rotation.z = 0.0174533
      cube18.position.y = 525
      cube18.position.x = 175

      scene.add( cube18 );

// draw a square
      var geometry = new THREE.BoxGeometry( 50,50,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cube19 = new THREE.Mesh( geometry, material );
      cube19.rotation.z = 0.0174533
      cube19.position.y = 600
      cube19.position.x = 100

      scene.add( cube19 );




  // draw a FINISH square
      var geometry = new THREE.BoxGeometry( 100,100,100);
      var material = new THREE.MeshNormalMaterial(  );
      var cubeFinish = new THREE.Mesh( geometry, material );
      cubeFinish.rotation.z = 0.0174533
      cubeFinish.position.y = 650
      cubeFinish.position.x = 0

      scene.add( cubeFinish );


   // draw a center square
      var geometry = new THREE.BoxGeometry( 50,200,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cubeTop = new THREE.Mesh( geometry, material );
      cubeTop.rotation.z = 0.0174533
      cubeTop.position.y = 500
      cubeTop.position.x = 0

      scene.add( cubeTop );

// draw a sphere
      var geometry = new THREE.SphereGeometry( 100, 5, 32 );
      var material = new THREE.MeshNormalMaterial(  );
      var sphere = new THREE.Mesh( geometry, material );

sphere.position.y = 250
sphere.position.x = 0

scene.add( sphere );


  // draw a center square
      var geometry = new THREE.BoxGeometry( 50,200,50);
      var material = new THREE.MeshNormalMaterial(  );
      var cubeTop2 = new THREE.Mesh( geometry, material );
      cubeTop2.rotation.z = 0.0174533
      cubeTop2.position.y = 0
      cubeTop2.position.x = 0

      scene.add( cubeTop2 );

function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
        cylinder.rotation.x += 0
        // cube1.rotation.x += .01
        // cube2.rotation.x += .01
        // cube3.rotation.x += .01
        // cube4.rotation.x += .01
        // cube5.rotation.x += .01
        // cube6.rotation.x += .01
        // cube7.rotation.x += .01
        // cube8.rotation.x += .01
        // cube9.rotation.x += .01
        //  cube11.rotation.x += .01
        //  cube12.rotation.x += .01
        //  cube13.rotation.x += .01
        //  cube14.rotation.x += .01
        //  cube15.rotation.x += .01
        //  cube16.rotation.x += .01
        //  cube17.rotation.x += .01
        //  cube18.rotation.x += .01
        //  cube19.rotation.x += .01

        cubeFinish.rotation.y += .1
        cubeFinish.rotation.z += .1

        cubeTop.rotation.x -= .1
        cubeTop.rotation.y -= .1
        cubeTop.rotation.z -= .1

          sphere.rotation.y += .1

          cubeTop2.rotation.x += .1
          cubeTop2.rotation.y += .1

        cylinder.position.x += cylinderMove
        cylinder.position.y += cylinderMovey

        cylinder2.position.x += cylinder2Move
        cylinder2.position.y += cylinder2Movey
        //scene.rotation.y += Team1scene

      //  scene.rotation.y += Team1scene

        //camera.position.z += 1
        //camera.position.x -= 1
        scene.rotation.y += .001
        //scene.rotation.y -= .01
        //camera.rotation.y += .1
      }
      render();

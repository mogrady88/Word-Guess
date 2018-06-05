window.onload = choosePic; 
alert("Guess which national park is shown in the image. Press any key to start!");
//alert("Press any key to start!");
//variables and arrays
var imageArray = new Array("assets/images/everglades.jpg","assets/images/glacier.jpg","assets/images/grand_canyon.jpg","assets/images/grand_teton.jpg","assets/images/olympic.jpg","assets/images/ranier.jpg","assets/images/yellowstone.jpeg","assets/images/yosemite.jpg","assets/images/zion.jpg");
var parkNameArray = new Array("everglades","glacier","grand canyon","grand teton","olympic","ranier","yellowstone","yosemite","zion");
var wins = 0;
var losses = 0;
var guessCount = 10;
var blankArray = [];

console.log(imageArray.length);

//random picture generator
function choosePic() {
var randomNum = Math.floor(Math.random() * imageArray.length);
document.getElementById('parkImage').src = imageArray[randomNum];
var word = parkNameArray[randomNum];
var wordAnswerArray = word.split("");

console.log(wordAnswerArray);

for (i = 0; i < word.length; i++){
    if (blankArray[i] === " "){
        blankArray[i] = " ";
        document.getElementById('answer').append(blankArray[i]);
    } 
    else {
    blankArray[i]= "_ ";
    document.getElementById('answer').append(blankArray[i]);
    }
}

$(function( ){
    $('body').on('keyup', typer);
    
    });
    
    function typer(event)
    {
     guessCount--;
     console.log(guessCount);
     $('#guessesLeft').text(guessCount);
     if (guessCount == 0){
        alert("You lose: Try spending some more time outside...");
        losses++;
        $('#losses').text(losses);
        guessCount = 10;
        $("#guesses").html("Letters Guessed: ");
    }
    
      $('#guesses').append(String.fromCharCode(event.keyCode));
      var singleLetterGuess = String.fromCharCode(event.keyCode);
      console.log(singleLetterGuess);
      console.log(word)
      console.log(word.indexOf(singleLetterGuess.toLowerCase()))
     if (word.indexOf(singleLetterGuess.toLowerCase()) != -1){
        blankArray[word.indexOf(singleLetterGuess.toLowerCase())] = singleLetterGuess + " ";
        $("#answer").html(blankArray);
     }


    //  for (var j = 0;j < word.length; j++){
    //      if (wordAnswerArray[j] === singleLetterGuess){
    //          blankArray[j] = singleLetterGuess;
    //      }
    //  }
    }
    console.log(guessCount);
}


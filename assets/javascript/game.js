var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", , "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var userTracker = [];  
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log("Wins" + wins)
console.log("Losses" + losses)
console.log("Guesses:" + guesses)
console.log("Computer chose: " + computerChoice)


document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();
    
    

    if(userGuess === computerChoice){
        wins++;
        
    }
    else{
        guesses--;
        
    }
    if(guesses < 0){
        losses++;  
        
    }

    
    
    
    userTracker.push(userGuess);

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("userTracker").innerHTML = "Guesses so far: " + userTracker;
};

document.addEventListener("DOMContentLoaded", function() {    
    var images = [
        "./assets/rock-hand.png",      
        "./assets/paper-hand.png",    
        "./assets/scissors-hand.png"   
    ];    
    var you = document.getElementById("box1");
    var comp = document.getElementById("box2");

    var userScore = 0;
    var compScore = 0;
    var roundsPlayed = 0;

    
    function imageclick(youindex) {    
        var compindex = Math.floor(Math.random() * images.length);

        you.style.backgroundImage = "url('" + images[youindex] + "')";
        comp.style.backgroundImage = "url('" + images[compindex] + "')";

        var result = determineWinner(youindex, compindex);


        if (result === "You won the game!") {
            youScore++;
        } else if (result === "Computer won the game!") {
            compScore++;
        }
        roundsPlayed++;
        updateScores();
        if (roundsPlayed === 5) {
            declareResult();
        }
    }
    function determineWinner(youindex, compindex) {
    
        var userChoice;
        if (youindex === 0) {
            userChoice = "rock";
        } else if (youindex === 1) {
            userChoice = "paper";
        } else if (youindex === 2) {
            userChoice = "scissors";
        }

        var compChoice;
        if (compindex === 0) {
            compChoice = "rock";
        } else if (compindex === 1) {
            compChoice = "paper";
        } else if (compindex === 2) {
            compChoice = "scissors";
        }
        if (userChoice === compChoice) {
            return "It's a tie!";

        } else if ((userChoice === "rock" && compChoice === "scissors") ||
                   (userChoice === "paper" && compChoice === "rock") ||
                   (userChoice === "scissors" && compChoice === "paper")) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

   
    function updateScores() {
        document.getElementById("user-score").textContent = userScore;
        document.getElementById("comp-score").textContent = compScore;
    }

 
    function declareResult() {
        if (userScore > compScore) {
            alert("You win the game!");
        } else if (userScore < compScore) {
            alert("Computer wins the game!");
        } else {
            alert("It's a tie!");
        }
    }

    
    var buttons = document.querySelectorAll(".button");

    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            
            imageclick(index);
        });
    });
});

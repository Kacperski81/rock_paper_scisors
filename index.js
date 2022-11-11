var winningConditions = ['rs', 'pr', 'sp'];
var computerChoiceArray = ['r', 's', 'p'];
var userScore = 0;
var computerScore = 0;
var round = 1;
for (var i = 0; i < 5; i++) {
   // ranodom computer choice
   var computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
   // ask user for his choice
   var userChoice = prompt(
      "Round: " + round + " of 5" + "\n" +
      "Chose one of p r s" + "\n" +
      "\n" + "User Score: " + userScore + "\n" +
      "Computer Score: " + computerScore);
   // if user click "Cancel" exit game
   if (userChoice === null) {
      break;
   }
   // check for correct input
   if (computerChoiceArray.includes(userChoice)) {
      round++;
      // first check for a tie
      if (userChoice === computerChoice) {
         alert("It's a tie!" + "\n" +
            "User choice: " + userChoice + "\n" + 
            "Computer choice: " + computerChoice)
      } else {
         var result = userChoice + computerChoice;
         if (winningConditions.includes(result)) {
            userScore++;
            alert("You won!" + "\n" + 
               "User choice: " + userChoice + "\n" + 
               "Computer choice: " + computerChoice);
         } else {
            computerScore++;
            alert("Computer won!" + "\n" +
               "User choice: " + userChoice + "\n" + 
               "Computer choice: " + computerChoice);

         }
      }
   } else {
      alert("You can choose beetwen r s p");
      // if user chose wrong letter don't loose round
      i === 0 ? i = 0 : i--;
   }
}

//check for the winner
var winner = computerScore === userScore ? "It's a tie!" : 
computerScore > userScore ? "Computer won!" : "You Won!!!";

document.body.innerText = "Final Result: " + "\n" + "User Score: " + userScore + "\n" + 
"Computer score: " + computerScore + "\n" + winner;




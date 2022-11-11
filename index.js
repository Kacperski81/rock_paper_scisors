var winningConditions = ['rs', 'pr', 'sp'];
var computerChoiceArray = ['r', 's', 'p'];
var userScore = 0;
var computerScore = 0;
var round = 1;
for (var i = 0; i < 10; i++) {
   // ranodom computer choice
   var computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];
   // ask user for his choice
   var userChoice = prompt(
      "Round: " + round + " of 10" + "\n" +
      "Chose between P or R or S " + "\n" +
      "\n" + "User Score: " + userScore + "\n" +
      "Computer Score: " + computerScore);
   // if user click "Cancel" exit game
   if (userChoice === null) {
      break;
   }
   // change user input to lower case
   userChoice = userChoice.toLowerCase();
   // check for correct input
   if (computerChoiceArray.includes(userChoice)) {
      round++;
      // change user and computer choices to full name
      var newUserChoice;
      switch(userChoice) {
         case "p":
            newUserChoice = "paper";
            break;
         case "r":
            newUserChoice = "rock";
            break;
         case "s":
            newUserChoice = "scissors";
            break;
         default:
            newUserChoice = "";
      }
      var newComputerChoice;
      switch(computerChoice) {
         case "p":
            newComputerChoice = "paper";
            break;
         case "r":
            newComputerChoice = "rock";
            break;
         case "s":
            newComputerChoice = "scissors";
            break;
         default:
            newComputerChoice = "";
      }
      // first check for a tie
      if (userChoice === computerChoice) {
         alert(
            "User choice: " + newUserChoice + "\n" +
            "Computer choice: " + newComputerChoice + "\n" +
            "It's a tie!")
      } else {
         var result = userChoice + computerChoice;
         if (winningConditions.includes(result)) {
            userScore++;
            alert(
               "User choice: " + newUserChoice + "\n" +
               "Computer choice: " + newComputerChoice + "\n" +
               "You won!");
         } else {
            computerScore++;
            alert(
               "User choice: " + newUserChoice + "\n" +
               "Computer choice: " + newComputerChoice + "\n" +
               "Computer won!");

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

document.body.innerText = "Final Results: " + "\n" + "User Score: " + userScore + "\n" +
   "Computer score: " + computerScore + "\n" + winner;




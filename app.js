let user_score = 0;
let bot_score = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const botScore = document.querySelector("#bot-score");
const draw = () => {
  message.innerText = "Game is Draw";
  message.style.backgroundColor = "#081b31";
};
const showWinner = (userWin) => {
  if (userWin) {
    user_score++;
    userScore.innerText = user_score;
    message.innerText = "You win!";
    message.style.backgroundColor = "green";
    console.log("winner is player");
  } else {
    bot_score++;
    botScore.innerText = bot_score;
    message.innerText = "Bot wins!";
    message.style.backgroundColor = "red";
  }
};
const generate_botChoices = () => {
  const value = ["rock", "paper", "scissor"];
  //Generate bot choice randomly
  const randomNum = Math.floor(Math.random() * 3);
  return value[randomNum];
};
const game = (userChoice) => {
  const botChoice = generate_botChoices();

  if (userChoice === botChoice) {
    //draw condition
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //bot choice must be scissors to win game by user
      userWin = botChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //bot choice must be rock so that user can win
      userWin = botChoice === "scissor" ? false : true;
    } else {
      //for user have siccsors condn bot choice must be paper to win

      userWin = botChoice === "rock" ? true : false;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    game(userChoice);
  });
});

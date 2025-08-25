let choices = ['rock', 'paper', 'scissors']
let userresult = document.querySelector('.userresult')
let computerresult = document.querySelector('.computerresult')
let result = document.querySelector('.result')


function play(userchoice) {
    let computerchoices = choices[Math.floor(Math.random() * 3)];


    userresult.innerHTML = `userchoice is ${userchoice}`;
    computerresult.innerHTML = `computer choices is ${computerchoices}`;

    if (userchoice == computerchoices) {
        result.innerHTML = "its a drawing";
    }
    else if (
        (userchoice == "rock" && computerchoices == "scissors") ||
            (userchoice == "scissors" && computerchoices == "paper") ||
            (userchoice == "paper" && computerchoices == "rock")
    ) {
        result.innerHTML = "you are win"
    }
    else {

        result.innerHTML = "you are lose"
    }



}
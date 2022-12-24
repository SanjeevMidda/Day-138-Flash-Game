//computer picks random letter
//shows this onscreen
//user has to type the correct letter to get a point
//flashes for only a second
//30 seconds

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let computerLetter;
let userScore = 0;
let timeLeft = 30;
let difficultyTime;
let seconds;
let repeatLetters;

let letterOutput = document.querySelector('#letter');
let letterInput = document.querySelector('body');
let score = document.querySelector('.scoreOne');

letterInput.addEventListener('keypress', letterEntered);

let difficulty = document.querySelectorAll('.difficulty h3');
let finalResult = document.querySelector('.finalResult');

difficulty.forEach(add => {
    add.addEventListener('click', difficultyLevel);
});

function letterEntered(e){

    if(e.key == computerLetter){
        console.log("Same!")
        userScore++;

        let sound = new Audio("ding.mp3")
        sound.play();
        letterOutput.style.color="yellow";

        score.innerHTML=userScore;
    }else{
        console.log("Not the same!");
        let incorrect = new Audio("wrong.mp3");
        incorrect.play();
        letterOutput.style.color="red";

    }
}

function randomLetter(){

    let returned = letters[Math.floor(Math.random()*letters.length)];

    computerLetter = returned;

    letterOutput.innerHTML = returned;
    letterOutput.style.color="green";
}


function timer(){
    timeLeft--;

    if(timeLeft == 0){
        clearInterval(seconds);
        clearInterval(repeatLetters);

        finalResult.innerHTML=`You scored ${userScore} points!`;
        timeLeft=0;
    }
    
}

function difficultyLevel(e){
    score.innerHTML ="";
    finalResult.innerHTML="";
    userScore=0;
    timeLeft=30;

    if(this.classList == "easy"){

        difficultyTime = 1500;

        seconds = setInterval(timer, 1000);
        repeatLetters = setInterval(randomLetter,difficultyTime);
       
    }else if(this.classList == "medium"){
        difficultyTime = 1000;

        seconds = setInterval(timer, 1000);
        repeatLetters = setInterval(randomLetter,difficultyTime);

    }else if(this.classList == "hard"){
        difficultyTime = 500;

        seconds = setInterval(timer, 1000);
        repeatLetters = setInterval(randomLetter,difficultyTime);

    }
}


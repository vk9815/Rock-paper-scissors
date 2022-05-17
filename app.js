var items = ["rock","paper","scissors"];
var tie ="it's a tie"
var playerScore = 0;
var computerScore = 0;
var rock = document.querySelector(".rock");
var scissors= document.querySelector(".scissors");
var paper = document.querySelector(".paper");
var player=document.querySelector(".player");
var computer = document.querySelector(".computer");
var roundResult = document.querySelector(".round-result");
var Reset = document.querySelector(".Reset");
var ComputerSelection;
function computerPlay(){
    return items[Math.floor(Math.random()*3)];
}

function Roundwin(){ 
    roundResult.classList.remove("loser");
    roundResult.classList.add("winner");
    playerScore++;
}
function RoundLoss(){
    roundResult.classList.remove("winner")
    roundResult.classList.add("loser")
    computerScore++;
}
function RoundTie(){
    roundResult.classList.remove("loser");
    roundResult.classList.remove("winner");
    roundResult.textContent=tie;
}
function disable(){
    if(playerScore==5||computerScore==5){
    rock.disabled=true;
    scissors.disabled=true;
    paper.disabled=true;
      if(playerScore==5){
          setTimeout(()=>{
          roundResult.textContent="Congratulations, you win !!!";
          },1000);
          setTimeout(()=>{
            roundResult.textContent="Click Reset Button to Play Again";
        },2500);
      }
      else{
          setTimeout(()=>{
          roundResult.textContent="Hard Luck :(    try again";
          },1000);
          setTimeout(()=>{
            roundResult.textContent="Click Reset Button to Play Again";
        },2500);
      }
     
    }
}

rock.addEventListener("click",()=>{
    ComputerSelection=computerPlay();
    if(ComputerSelection=="scissors"){
       Roundwin();
       roundResult.textContent=`Rock beats ${ComputerSelection},you win this round!!`
    }
    else if(ComputerSelection=="paper"){
        RoundLoss();
        roundResult.textContent=` ${ComputerSelection} beats Rock,you lose this round`
    }
    else{
        RoundTie();
    }
    player.textContent=playerScore;
    computer.textContent=computerScore;
    disable();
});

scissors.addEventListener("click",()=>{
    ComputerSelection=computerPlay();
    if(ComputerSelection=="paper"){
        Roundwin();
        roundResult.textContent=`Scissors beats ${ComputerSelection},you win this round!!`
    }
    else if(ComputerSelection=="rock"){
        RoundLoss();
        roundResult.textContent=`${ComputerSelection} beats Scissors,you lose this round `
    }
    else{
       RoundTie();
    }
    player.textContent=playerScore;
    computer.textContent=computerScore;
    disable();
});

paper.addEventListener("click",()=>{
    ComputerSelection=computerPlay();
    if(ComputerSelection=="rock"){
  
            roundResult.textContent=`paper beats ${ComputerSelection},you win this round !!`
            Roundwin();
        
       
           
    }
    else if(ComputerSelection=="scissors"){
        
  
        roundResult.textContent=`${ComputerSelection} beats paper,you lose this round`
        RoundLoss();

    }
    else{
        RoundTie();
    }
    player.textContent=playerScore;
    computer.textContent=computerScore;
    disable();
});
Reset.addEventListener("click",()=>{
    playerScore = 0;
    computerScore = 0;
    rock.disabled=false;
    scissors.disabled=false;
    paper.disabled=false;
     player.textContent=playerScore;
    computer.textContent=computerScore;
    roundResult.classList.remove("loser");
    roundResult.classList.remove("winner");
    roundResult.textContent="Let's start the game";
})
function solve(playerTurm){
    const rock="Rock";
    const paper="Paper";
    const scissors="Scissors";
    if(playerTurm=="r" || playerTurm=="rock"){
        playerTurm=rock;
    } else if (playerTurm=="p" || playerTurm=="paper"){
        playerTurm=paper;
    } else if (playerTurm=="s" || playerTurm=="scissors"){
        playerTurm=scissors;
    } else {
        console.log("Invalid Input. Try Again...");
    }

    let computerRandomNumber=Math.floor(Math.random()*3)+1;
    let computerMove;
    switch (computerRandomNumber) {
        case 1:
            computerMove=rock;
            break;
        case 2:
            computerMove=paper;
            break;
        case 3:
            computerMove=scissors;
            break;
        default:
            break;
    }
    
    console.log(`You choose ${playerTurm}`);
    console.log(`The computer chooses ${computerMove}`);
    if (playerTurm === computerMove) {
        console.log("This game was a draw!");
    } else if (
        (playerTurm === rock && computerMove === scissors) ||
        (playerTurm === paper && computerMove === rock) ||
        (playerTurm === scissors && computerMove === paper)
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }



}
solve("r");


    const icons = {
  rock: 'r.png',
  paper: 'p.png',
  scissors: 's.png'
};

    let score =  JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
 };
    updateScoreElement();

    function playGame(playerMove){

    let result = '';
    const computerMove =  pickComputerMove();

    if(playerMove === "scissors"){
    if(computerMove === 'rock'){
        result = 'You Lose';
    }
    else if(computerMove === 'paper'){
        result = 'You Win';
    }
    else if(computerMove === 'scissors'){
        result = 'Tie';
    }
    }

    else if(playerMove === "paper"){
        if(computerMove === 'rock'){
        result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
    }

    else if(playerMove === "rock"){
        if(computerMove === 'rock'){
        result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'scissors'){
            result = 'You Win';
        }
    }
    if(result === 'You Win'){
        score.wins ++;
    }
    else if(result === 'You Lose'){
        score.loses ++;
    }
    else if(result === "Tie"){
        score.ties ++
    }

    updateScoreElement();

    document.querySelector('.js-result').
    innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `
  <div class="move-result">
 <img src="${icons[playerMove]}" alt="${playerMove}" class="move-icon">
 <span>You</span>
 </div>
  <div class="move-result">
   <img src="${icons[computerMove]}" alt="${computerMove}" class="move-icon">
 <span>Computer</span>
  </div>
  `;
    


}
    
    
    
    function updateScoreElement(){
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
   

    }
    
   function pickComputerMove(){
    let computerMove = '';
    const randomNumber = Math.random();
    
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber <1){
        computerMove = 'scissors';
    
    }
   
    return computerMove;
   }

let score = JSON.parse(localStorage.getItem(('score'))) || { wins:0, loses:0, ties:0 }
        updateScore();

        function playGame(playerMove){
            const compMove = pickCompMove()
            let res;
 
            if (playerMove === 'scissors') {
                if (compMove === 'rock') {
                    res = 'You lose';
                } else if (compMove === 'paper') {
                    res = 'You won';
                } else if (compMove === 'scissors') {
                    res = 'Tie';
                }
            }

            else if (playerMove === 'rock'){
                if (compMove === 'rock'){
                    res = 'Tie'
                } else if(compMove === 'paper'){
                    res = 'You lose'
                } else if(compMove === 'scissors'){
                    res = 'You won'
                }

            }

            else if (playerMove === 'paper'){
                if (compMove === 'rock'){
                    res = 'You won'
                } else if(compMove === 'paper'){
                    res = 'Tie'
                } else if(compMove === 'scissors'){
                    res = 'You lose'
                }
            }
            
            if (res === 'You lose') { 
                score.loses += 1
            } else if (res === 'You won') { 
                score.wins += 1
            } else if (res === 'Tie') { 
                score.ties += 1
            }

            updateScore();
            document.querySelector('.js-result').innerHTML = res;
            document.querySelector('.js-moves').innerHTML = `You
                <img class="icon" src="images/${playerMove}-emoji.png" alt="">
                <img class="icon" src="images/${compMove}-emoji.png" alt="">
                Computer`

            localStorage.setItem('score', JSON.stringify(score))
        }
    
        function updateScore(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Loses: ${score.loses} , Ties: ${score.ties}`;
        }

        function pickCompMove(){
            const randNum = Math.random();
            let compMove;
            if (randNum >= 0 && randNum < 1/3){
                compMove = 'rock'
            } else if (randNum >= 1/3 && randNum < 2/3){
                compMove = 'paper'
            } else if (randNum >= 2/3 && randNum < 1){
                compMove = 'scissors'
            }
            return compMove
        }
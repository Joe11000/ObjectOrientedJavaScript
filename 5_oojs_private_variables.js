function SecretCodeGame(){
  // this is a private variable inside this function
  var secretNumber = Math.floor(Math.random() * 100)
  var num_of_guesses = 0;

  this.guessNum = (num) => {
    num_of_guesses++;
    if( typeof num != 'number' ) { throw new Error('arguments must be a positive integer') }

    if(num  < secretNumber ){
      document.write(`<p>guess #${num_of_guesses} : higher than ${num}</p>`)

      return(`guess #${num_of_guesses}: higher`)
    }  
    else if(num > secretNumber) {
      document.write(`<p>guess #${num_of_guesses}: lower than ${num}</p>`)
      return(`guess #${num_of_guesses}: lower`)
    }
    else {
      document.write(`<p>guess #${num_of_guesses}: correct = ${num}</p>`)
      return (`guess #${num_of_guesses}: correct`)
    }
  }
}

function search(game){
  let num_to_guess = 50; 
  let range = [0, 100]
  for(let i  = 0; i <= 30; i++) {
    if(i >= 30 )[ document.write('infinite loop')]
    num_to_guess = Math.floor((range[0] + range[1] ) / 2)
    let result = game.guessNum( num_to_guess ) 
      if(result.includes('higher')) { range[0] = num_to_guess}
      else if(result.includes('lower')) { range[1] = num_to_guess}
      else if(result.includes('correct')) { return num_to_guess}
  } 
}
let game = new SecretCodeGame();
search(game);


// can't cheat by trying to sneak what answer is
  SecretCodeGame.prototype.getSecret = function() {
    return this.secretNumber;
  }
  game.getSecret() === undefined; // Nice try cheater, you can't cheat that easy


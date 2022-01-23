
  let randomNumber = Math.floor(Math.random() * 100) + 1;//this is our random number line with our range
  let rep =10;
  let mistakes= 0;
  let score = document.getElementById('score');
  const guesses = document.querySelector('.guesses');
  const lastCode = document.querySelector('.lastCode');
  const hints = document.querySelector('.hints');
  const codeSubmit = document.querySelector('.codeSubmit');
  const codeField = document.querySelector('.codeField');
  let guessCount = 1;
  let resetButton;


  function refresh(){
          window.location.reload("reset");
        }
  function code() {
    const userInput = Number(codeField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userInput + ' ';

    //our input scenarios. This snipet of code was taken from class.
      if (userInput === randomNumber) {
            lastCode.textContent = 'Congratulations! You broke the code!';
            lastCode.style.backgroundColor = 'yellow';
            hints.textContent = '';
            setGameOver();
          } else if (guessCount === 10) {
            lastCode.textContent = 'Oh no, your log was found out! Restart!';
            lastCode.style.backgroundColor = 'red';
            hints.textContent = '';
            setGameOver();
          } else {
            lastCode.textContent = 'Wrong!';
            lastCode.style.backgroundColor = 'red';
            if(userInput < randomNumber) {
              hints.textContent = 'Last code was too low!' ;
              hints.style.backgroundColor = 'lightblue';
            } else if(userInput > randomNumber) {
              hints.textContent = 'Last code was too high!';
              hints.style.backgroundColor = 'orange';
            }
                }
                //this is to count the guesses
    guessCount++;
    codeField.value = '';
    codeField.focus();
  }
  document.getElementById('guesses').InnerHTML += "Insert text here <br/>"

  codeSubmit.addEventListener('click', code);

  function setGameOver() {
    codeField.disabled = true;
    codeSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    }

  function clearResult(){
    document.getElementById("result").value = ''
  }

    resetButton.parentNode.removeChild(resetButton);
    codeField.disabled = false;
    codeSubmit.disabled = false;
    codeField.value = '';
    codeField.focus();
    lastCode.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

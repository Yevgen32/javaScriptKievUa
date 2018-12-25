let constNumber = Math.floor((Math.random() * 10) + 1);
console.log(constNumber);
let attempts = 3;
alert('You have 3 attempts')
function guessNumber() {
    let number = parseInt(document.getElementById('number').value);
    if (attempts <= 3 && attempts > 1){
        if (constNumber == number){
            alert('You win. Number is ' + constNumber);
        }
        else if(constNumber < number){
            attempts--;
            alert('x < Number');
        }
        else if(constNumber > number){
            attempts--;
            alert('x > Number');
        }
    }
    else if(attempts == 1){
        alert('game over');
    }
    else {
        alert('error');
    }
    console.log(attempts);
}
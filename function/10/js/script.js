function guessNumber() {
    let number = document.getElementById('number').value;
    number = parseInt(number);
    let result = document.getElementById('res');
    if (number > 10){
        return result.innerHTML = number*number;
    }
    else if (number < 7){
        return result.innerHTML = 'number less 7';
    }
    else if (number == 8){
        return result.innerHTML = 7;
    }
    else if (number == 9){
        return result.innerHTML = 8;
    }
    else {
        return result.innerHTML = 'error';
    }
}
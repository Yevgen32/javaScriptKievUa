document.getElementById('click').onclick = function () {
    let n = document.getElementById('n').value;
    let res = document.getElementById('res');
    if (n <= 90 && n >= 1){
        if (n >= 1 && n <= 20){
            res.value = 'house_1';
        }
        else if (n >= 21 && n <= 48){
            res.value = 'house_2';
        }
        else if (n >= 49 && n <= 90){
            res.value = 'house_3';
        }
    }
    else {
        res.value = 'enter number in the range from 1...90 ';
    }
}
document.getElementById('click').onclick = function () {
    let age = document.getElementById('age').value;
    let res = document.getElementById('res');
    if (age >= 0 && age < 3){
        res.value = '0%';
    }
    else if (age >= 3 && age < 10){
        res.value = '10%';
    }
    else if (age >= 10 && age < 20){
        res.value = '20%';
    }
    else if (age >= 20){
        res.value = '25%';
    }
    else if (age < 0){
       res.value = 'error, don`t -number';
    }
    else {
        res.value = 'error';
    }
    return res.value;
};
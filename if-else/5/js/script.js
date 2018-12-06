document.getElementById('click').onclick = function () {
    let age = document.getElementById('age').value;
    if (age >= 16){
        alert(age + ' welcome');
    }
    else {
        alert(age + ' error');
    }

};
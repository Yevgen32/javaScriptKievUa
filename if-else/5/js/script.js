document.getElementById('click').onclick = function () {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    if (login == 'ivan' && password == '334455' || login == 'alex' && password == '777' || login == 'petr' && password == 'b5678'){
        alert('welcome');
    }
    else {
        alert('error');
    }

};
function controlAge() {
    age = document.getElementById('age').value;
    age = parseInt(age);
    if (age >= 16){
        alert('Welcome!');
    }
    else {
        alert('You are still young(');
    }
}
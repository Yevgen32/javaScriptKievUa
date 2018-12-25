function controlAge() {
    age = document.getElementById('age').value;
    age = parseInt(age);
    console.log(age);
    if (age >= 16){
        alert('Welcome!');
    }
    else if(age < 16 ){
        alert('You are still young(');
    }
    else if (age == 'undefined' || isNaN(age)){
        alert('input age');
    }
    else {
        alert('error');
    }
}
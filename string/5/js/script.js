function processingForm() {
    let surname = document.getElementById('surname').value;
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    surname = surname.replace(/ /g, '');
    name = name.replace(/ /g, '');
    password = password.replace(/ /g, '');
    email = email.replace(/ /g, '');
    if (password.length >= 5){
        if(email.search(/@/) != -1){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    else {
        console.log(false);
    }

}

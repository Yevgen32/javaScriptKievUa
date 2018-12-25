let allButton = document.getElementsByTagName("button");

for (let i = 0; i < allButton.length; i++){
    allButton[i].addEventListener('click', summ);
}


let click1 = 0;

function summ() {
    click1 ++
    console.log(click1);
}


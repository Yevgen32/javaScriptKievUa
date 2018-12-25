let inputText = document.getElementById('inputText');
function cleanText() {
    let textArr1 = inputText.value.split('');
    let textArr2 = inputText.value.split('');
    let not1 = textArr1.splice(0,7);
    let res1 = textArr1;
    let not2 = textArr2.splice(0,8);
    let res2 = textArr2;
    not1 = not1.join('');
    not2 = not2.join('');

    if(not1 == 'http://'){
        alert(res1.join(''));
    }
    else if(not2 == 'https://'){
        alert(res2.join(''));
    }
    else {
        alert('error');
    }
}
function filterSearch() {
    let inputText = document.getElementById('search').value;
    let arrayText1 = inputText.split('');
    let rule1 = arrayText1.splice(0, 7).join('');
    let arrayText2 = inputText.split('');
    let rule2 = arrayText2.splice(0, 8).join('');
    let arrayText3 = inputText.split('');
    let rule3 = arrayText3.splice(0, 11).join('');
    let arrayText4 = inputText.split('');
    let rule4 = arrayText4.splice(0, 12).join('');

    if(rule1 == 'http://'){
        console.log(arrayText1.join(''));
    }
    else if(rule2 == 'https://'){
        console.log(arrayText2.join(''));
    }
    else if(rule3 == 'http://www.'){
        console.log(arrayText3.join(''));
    }
    else if(rule4 == 'https://www.'){
        console.log(arrayText4.join(''));
    }
    else if (rule1 != 'http://' || rule2 != 'https://' || rule3 != 'http://www.' || rule4 != 'https://www.'){
        console.log(inputText);
    }
    else{
        console.error('error');
    }
}

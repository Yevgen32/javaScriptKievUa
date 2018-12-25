function haveIndent() {
    let pAll = document.getElementsByTagName('p');
    console.log(pAll);
    let j = 0;
    for (let i = 0; i < pAll.length; i++){
        if (pAll[i].style.textIndent != ''){
            j++
            pAll[i].textContent = j + " " + pAll[i].textContent;
        }

    }
}
haveIndent();
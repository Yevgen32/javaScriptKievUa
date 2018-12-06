document.getElementById('compare').onclick = function () {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let res = document.getElementById('res');
    if (n1 > n2){
        res.value = n1;
    }
    else if (n1 < n2){
        res.value = n2;
    }
    else {
       res.value = 'ERROR';
    }
    return res.value;
}
function poww() {
    number = document.getElementById('number').value;
    degree = document.getElementById('degree').value;
    number = parseInt(number);
    degree = parseInt(degree);

    let res = Math.pow(number,degree)

    alert(res);
}





function lengthArray() {
    arr = document.getElementById('arr').value;
    arr = arr.split(',');
    if (isNaN(arr)){
        let result = arr.length;
        console.log(result);
    }
    else {
        console.log('error, input array');
    }
}
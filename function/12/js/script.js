let smallPrice = 17;
let bigPrice = 25;
let smallWeight = 250;
let bigWeight = 340;
let cheesePrice = 4;
let cheeseWeight = 25;
let saladPrice = 5;
let saladWeight = 5;
let meatPrice = 10;
let meatWeight = 50;
let sousPrice = 5;
let sousWeight = 0;
let mayoPrice = 4;
let mayoWeight = 10;
let resultPrice = 0;
let resultWeight = 0;
let resultBigPrice = 0;
let resultBigWeight = 0;

let small = document.getElementById('small').innerHTML;
let big = document.getElementById('big').innerHTML;
let flag = 0;


document.getElementById('small').onclick = function () {
    flag++;
    console.log(resultPrice);
    console.log(resultWeight);
    console.log(flag);
    resultPrice += smallPrice;
    resultWeight += smallWeight;
    if (flag == 1){
        let cheese = document.createElement('button');
        cheese.innerHTML = 'cheese';
        let salad = document.createElement('button');
        salad.innerHTML = 'salad';
        let meat = document.createElement('button');
        meat.innerHTML = 'meat';
        main.appendChild(cheese);
        main.appendChild(salad);
        main.appendChild(meat);
        cheese.addEventListener("click", clickCheese);
        salad.addEventListener("click", clickSalad);
        meat.addEventListener("click", clickMeat);
    }

    let end = document.createElement('button');
    if(flag == 1){
        end.innerHTML = 'end';
        main.appendChild(end);
    }

    end.addEventListener('click', clickEnd);

}
document.getElementById('big').onclick = function () {
    flag++;
    console.log(resultBigPrice);
    console.log(resultBigWeight);
    console.log(flag);
    resultBigPrice += bigPrice;
    resultBigWeight += bigWeight;
    if (flag == 1){
        let cheese = document.createElement('button');
        cheese.innerHTML = 'cheese';
        let salad = document.createElement('button');
        salad.innerHTML = 'salad';
        let meat = document.createElement('button');
        meat.innerHTML = 'meat';
        main.appendChild(cheese);
        main.appendChild(salad);
        main.appendChild(meat);
        cheese.addEventListener("click", clickCheeseBig);
        salad.addEventListener("click", clickSaladBig);
        meat.addEventListener("click", clickMeatBig);
    }

    let end = document.createElement('button');
    if(flag == 1){
        end.innerHTML = 'end';
        main.appendChild(end);
    }
    end.addEventListener('click', clickEnd);
}

function clickCheeseBig() {
    resultBigPrice += cheesePrice;
    console.log(resultBigPrice);
    resultBigWeight += cheeseWeight;
    console.log(resultBigWeight);
}
function clickSaladBig() {
    resultBigPrice += saladPrice;
    console.log(resultBigPrice);
    resultBigWeight += saladWeight;
    console.log(resultBigWeight);
}
function clickMeatBig() {
    resultBigPrice += meatPrice;
    console.log(resultBigPrice);
    resultBigWeight += meatWeight;
    console.log(resultBigWeight);
}

function clickCheese() {
    resultPrice += cheesePrice;
    console.log(resultPrice);
    resultWeight += cheeseWeight;
    console.log(resultWeight);
}
function clickSalad() {
    resultPrice += saladPrice;
    console.log(resultPrice);
    resultWeight += saladWeight;
    console.log(resultWeight);
}
function clickMeat() {
    resultPrice += meatPrice;
    console.log(resultPrice);
    resultWeight += meatWeight;
    console.log(resultWeight);
}
function clickEnd() {
    let res = resultPrice + resultBigPrice;
    let weight = resultWeight + resultBigWeight;
    alert("Price: " + res + "ГРН " + "Weight: " + weight + "ккал " + "Quantity: " + flag);
}


localStorage.setItem('myKey', res);
let localValue = localStorage.getItem('myKey');
console.log(localValue);
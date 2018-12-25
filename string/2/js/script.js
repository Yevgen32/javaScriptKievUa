let imgArray = ['1.jpg','2.png','3.jpg'];
console.log(imgArray);
let imgOutput = document.getElementsByClassName('imgOutput');
for(let i = 0; i < imgArray.length; i++){
    document.write('<img src="img/'+imgArray[i]+'">');
}
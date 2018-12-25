function addShadowImg() {
    let img = document.getElementsByTagName('img');
    for (let i = 0; i < img.length; i++){
        img[i].style.boxShadow = '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue';
    }
}
addShadowImg();
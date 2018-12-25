function editTag() {
    str = document.getElementById('str').value;

    let tagP = document.getElementsByTagName('p');
    let tagDiv = document.getElementsByTagName('div');
    let tagH1 = document.getElementsByTagName('h1');
    let tagH2 = document.getElementsByTagName('h2');
    if (str == 'p' || str == 'div' || str=='h1' || str=='h2'){
        for (let i = 0; i < tagP.length; i++){
            if(tagP[i].localName == str) {
                tagP[i].style.textDecoration = 'underline';
                console.log('p');
            }
        }
        for (let i = 0; i < tagDiv.length; i++){
            if(tagDiv[i].localName == str) {
                tagDiv[i].style.textDecoration = 'underline';
                console.log('div');
            }
        }
        for (let i = 0; i < tagH1.length; i++){
            if(tagH1[i].localName == str) {
                tagH1[i].style.textDecoration = 'underline';
                console.log('H1');
            }
        }
        for (let i = 0; i < tagH2.length; i++){
            if(tagH2[i].localName == str) {
                tagH2[i].style.textDecoration = 'underline';
                console.log('H2');
            }
        }
    }
    else{
        alert('error');
    }
}
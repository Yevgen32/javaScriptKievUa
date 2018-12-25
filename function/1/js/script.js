function f() {
   let tagP = document.getElementsByTagName('p');
   for (let i = 0; i < tagP.length; i++){
       tagP[i].style.color = 'red';
   }
}
f();
let myButton1 = document.getElementById('red');
let myButton2 = document.getElementById('ori');
let myH1 = document.querySelector('h1');

myButton1.onclick = function() {
    myH1.style.color = 'red';
}

myButton2.onclick = function() {
    myH1.style.color = '#00539F';
}
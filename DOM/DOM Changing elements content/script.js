const elementgEBTN = document.getElementsByTagName('li');
const elementgEBCN = document.getElementsByClassName('list-item');
const elementqS = document.querySelector('ul')
const elementqSA = document.querySelectorAll('li');
const myItem = document.createElement('li');

myItem.innerText = elementqSA[0].innerText;
myItem.setAttribute('class', 'list-item')
elementqS.append(myItem);

elementqS.style.color = "purple";
myItem.style.color = "gold";
console.log('elementqS test')
console.log(elementqS.innerHTML);

console.log("elementgEBTN");
console.log(elementgEBTN);
console.log("elementgEBCN");
console.log(elementgEBCN);
console.log("elementqS");
console.log(elementqS);
console.log("elementqSA");
console.log(elementqSA);
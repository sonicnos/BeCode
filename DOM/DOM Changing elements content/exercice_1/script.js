const body = document.querySelector('body');
body.style.backgroundColor = "beige";

const bold = document.querySelector('b');
bold.style.color = "red";

const sectionPart2 = document.querySelector(".part-2");
sectionPart2.style.backgroundColor = "darkblue"

const sectionPart1H1 = document.querySelector(".part-1").childNodes[1].childNodes[1];
sectionPart1H1.style.textTransform = "uppercase";

const sectionPart2A = document.querySelector(".part-2").childNodes[1].childNodes[5];
sectionPart2A.style.color = "pink"

const sectionPart1Ul = document.querySelector(".part-1").childNodes[1].childNodes[5];
sectionPart1Ul.style.color = "orange"

const sectionPart1UlLi = document.querySelector(".part-1").children[0].children[2];
for (let i=0; i<sectionPart1UlLi.children.length; i++) {
    sectionPart1UlLi.children[i].children[0].style.color = 'green'
}


console.log(bold);
console.log(sectionPart2A);
console.log(sectionPart1UlLi.children);
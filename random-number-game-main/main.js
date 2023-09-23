let maxNumber = parseInt(prompt("What is the max number"));

while (isNaN(maxNumber)) {
    alert("please write a number");
    maxNumber = parseInt(prompt("What is the max number"));
}

let randomNumber = Math.floor(Math.random(maxNumber) * maxNumber);
let userNumber = parseInt(prompt("What is the random number"));

while (isNaN(userNumber)) {
    alert("please write a number");
    userNumber = parseInt(prompt("What is the max number"));
}
let guess = 1;


while (randomNumber !== userNumber) {
    
    if (randomNumber > userNumber) {
        alert("Random number is bigger");
    }else{
        alert("Random number is smaller");
    }

    userNumber = parseInt(prompt("What is the random number"));

    guess+=1
}


alert(`You found the random number in ${guess} guesses`);
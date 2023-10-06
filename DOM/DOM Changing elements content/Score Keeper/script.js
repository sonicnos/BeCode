let scoreTeam1 = 0;
let scoreTeam2 = 0;
let scoreTotal = 0;

const scoreMax = 5;
const displayTeam1 = document.querySelector('.team1');
const displayTeam2 = document.querySelector('.team2');
const btnReset = document.querySelector('#reset');
const btnTeam1 = document.querySelector('#btn-team1');
const btnTeam2 = document.querySelector('#btn-team2');

const reset = () => {
    scoreTeam1 = 0;
    scoreTeam2 = 0;
    scoreTotal = 0;
    displayTeam1.textContent = scoreTeam1;
    displayTeam2.textContent = scoreTeam2;
    btnTeam1.disabled = false;
    btnTeam2.disabled = false;
}

const winnerLoser = () => {
    if(scoreTeam1>scoreTeam2) {
        displayTeam1.style.color = "green"
        displayTeam2.style.color = "red"
    }else{
        displayTeam1.style.color = "red"
        displayTeam2.style.color = "green"
    }
}

const checkWinner = () => {
    if(scoreTotal >= scoreMax) {
        btnTeam1.disabled = true
        btnTeam2.disabled = true
        winnerLoser()
    }
}

document.addEventListener ('click', (e) => {
    if(e.target.matches('#reset')){
        reset();
    }
    if(e.target.matches('#btn-team1')){
        scoreTeam1++;
        displayTeam1.textContent = scoreTeam1;
        scoreTotal++;
        checkWinner();
    }
    if(e.target.matches('#btn-team2')){
        scoreTeam2++;
        displayTeam2.textContent = scoreTeam2;
        scoreTotal++;
        checkWinner();
    }

}
);
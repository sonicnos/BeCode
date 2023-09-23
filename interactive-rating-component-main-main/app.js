const btnSubmit = document.querySelector(".submit");
const rate = document.querySelectorAll(".btn-rate");
const userSelection = document.getElementById("user-selection");


rate.forEach((rate, idx) => {
    rate.addEventListener("click", () => {
        let rateAnswer = idx+1;
        userSelection.innerHTML = `You selected ${rateAnswer} out of 5`;
    });
});

userSelection.innerHTML = "You selected  out of 5";

btnSubmit.addEventListener("click", () => {
    document.querySelector(".box-question").style.display = "none";
    document.querySelector(".box-thank").style.display = "flex";
});


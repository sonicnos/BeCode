const searchBar = document.getElementById('search-bar');
const submitBtn = document.getElementById('submit-btn');
const resultsDisplayValue = document.querySelector('.search-bar-value');
const openBtn = document.querySelector("data-open-modal");
const closeBtn = document.querySelector("data-close-modal");
const modal = document.querySelector("data-modal");
const overlay = document.querySelector("data-overlay");


submitBtn.addEventListener ('click', (e) => {
    resultsDisplayValue.innerText = searchBar.value;
});

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    overlay.classList.add("open");
});

closeBtn.addEventListener('click', () =>)
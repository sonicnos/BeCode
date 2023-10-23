const searchBar = document.getElementById('search-bar');
const submitBtn = document.getElementById('submit-btn');
const resultsDisplayValue = document.querySelector('.search-bar-value');



submitBtn.addEventListener ('click', (e) => {
    resultsDisplayValue.innerText = searchBar.value;
})
const fetchDataMeal = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    const data = await res.json();
    console.log(data);
  };

const fetchDataMealLetters = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json()
    console.log(data);
}

  fetchDataMeal();
  fetchDataMealLetters();
  
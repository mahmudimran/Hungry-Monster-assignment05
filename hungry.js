
function searchMeal() {
    const input = document.getElementById("input-value").innerText;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => displayMeals(data));
    const displayMeals = mealListItems => {
        const div = document.getElementById("meal");
            mealListItems.meals.forEach(meal => {
            const contentTitle = document.createElement('div');
            contentTitle.className = 'content-title';
            const mealInfo = `<div id="total" onclick="detailsMeal('${meal.strMeal}')">
            <img src="${meal.strMealThumb}">
            <h4 class="mealTitle">${meal.strMeal}</h4>
            </div>
         `;
            contentTitle.innerHTML = mealInfo;
            div.appendChild(contentTitle);
        });              
    }

    detailsMeal= meal=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> connectedMeal(data.meals[0]))
    }
    const connectedMeal= meals=>{
        console.log(meals);
        const mealDiv= document.getElementById("details-meal");
        mealDiv.innerHTML=`
        <div class="Ingredient-meals">
            <img src="${meals.strMealThumb}">
            <h4 class="meal-name">${meals.strMeal}</h4>
            <h5 class="meal-Ingredient">ingredients:</h5>
          <ul>
            <li>${meals.strMeasure1}${meals.str1}</li>
            <li>${meals.strMeasure2}${meals.strIngredient2}</li>
            <li>${meals.strMeasure3}${meals.strIngredient3}</li>
            <li>${meals.strMeasure4}${meals.strIngredient4}</li>
            <li>${meals.strMeasure5}${meals.strIngredient5}</li>
            <li>${meals.strMeasure6}${meals.strIngredient6}</li>
            <li>${meals.strMeasure7}${meals.strIngredient7}</li>
            <li>${meals.strMeasure8}${meals.strIngredient8}</li>
            <li>${meals.strMeasure9}${meals.strIngredient9}</li>
            <li>${meals.strMeasure10}${meals.strIngredient10}</li>
          </ul>
        </div>
        `
    }     
}

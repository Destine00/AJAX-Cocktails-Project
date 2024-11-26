import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (data) => {
  const section = get(".single-drink");
  const drink = data.drinks[0];

  const { strDrinkThumb: img, strDrink: name, strInstructions: desc } = drink;
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
  ];
  document.title = name;
  section.innerHTML = `<img src=${img} alt=${name} class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${name}</h2>
        <p class="drink-desc">${desc}</p>
        <ul class="drink-ingredients">${ingredients
          .map((ingredient) => {
            if (ingredient) {
              return `<li><i class='far fa-check-square'></i>${ingredient}</li>`;
            }
          })
          .join("")}</ul>
        <a href="index.html" class="btn">all cocktails</a>
      </article>`;
  hideLoading();
};
export default displayDrink;

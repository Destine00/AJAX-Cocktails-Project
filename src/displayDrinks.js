import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");

  if (!drinks) {
    console.log(drinks);
    hideLoading();
    section.textContent = `Sorry, No drinks matched your search`;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id=${id}>
            <img src=${image} alt=${name} />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  section.innerHTML = newDrinks;
  hideLoading();
  return section;
};
export default displayDrinks;

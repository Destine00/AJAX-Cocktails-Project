import fetchDrinks from "./fetchDrinks.js";
import displayDrink from "./displaySingleDrink.js";

const idURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  const id = localStorage.getItem("drinkId");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(`${idURL}${id}`);
    return displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);

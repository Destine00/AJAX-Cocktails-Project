import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const presentDrinks = async (url) => {
  const drinks = await fetchDrinks(url);
  const section = await displayDrinks(drinks);
  if (section) {
    return setDrink(section);
  }
};
export default presentDrinks;

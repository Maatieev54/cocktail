const path = "https://www.thecocktaildb.com/api/json/v1/1";

async function randomCocktail() {
  const res = await fetch(`${path}/random.php`);
  const json = await res.json();
  return transform(json.drinks[0]);
}

async function detailsById(id) {
  if (!id) return {};
  const res = await fetch(`${path}/lookup.php?i=${id}`);
  const json = await res.json();
  return json.drinks ? transform(json.drinks[0]) : {};
}

async function searchByName(name = "") {
  const res = await fetch(`${path}/search.php?s=${encodeURIComponent(name)}`);
  const json = await res.json();
  return json.drinks ? json.drinks.map(transform) : [];
}

async function byFirstLetter(letter = "a") {
  const res = await fetch(`${path}/search.php?f=${letter}`);
  const json = await res.json();
  return json.drinks ? json.drinks.map(transform) : [];
}

async function filterByCategory(cat) {
  const res = await fetch(`${path}/filter.php?c=${encodeURIComponent(cat)}`);
  const json = await res.json();
  return json.drinks ? json.drinks.map(transform) : [];
}

async function filterByAlcoholic(type) {
  // type: "Alcoholic" | "Non_Alcoholic"
  const res = await fetch(`${path}/filter.php?a=${type}`);
  const json = await res.json();
  return json.drinks ? json.drinks.map(transform) : [];
}

async function listCategories() {
  const res = await fetch(`${path}/list.php?c=list`);
  const json = await res.json();
  return json.drinks ? json.drinks.map((d) => d.strCategory) : [];
}

function transform(obj) {
  return {
    id: obj.idDrink,
    name: obj.strDrink,
    cat: obj.strCategory,
    alc: obj.strAlcoholic,
    glass: obj.strGlass,
    img: obj.strDrinkThumb,
    video: obj.strVideo,
    desc: obj.strInstructions,
    ingr: Object.entries(obj)
      .filter((item) => item[0].includes("strIngredient") && item[1])
      .map((item) => item[1]),
    measure: Object.entries(obj)
      .filter((item) => item[0].includes("strMeasure") && item[1])
      .map((item) => item[1]),
  };
}

export {
  randomCocktail,
  detailsById,
  searchByName,
  byFirstLetter,
  filterByCategory,
  filterByAlcoholic,
  listCategories,
};

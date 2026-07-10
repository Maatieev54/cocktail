const path = 'https://www.thecocktaildb.com/api/json/v1/1'

async function randomCocktail() {
    return fetch(`${path}/random.php`)
        .then(data => data.json())
        .then(json => transform(json.drinks[0]))
}

async function detailsById(id) {
    return id ? fetch(`${path}/lookup.php?i=${id}`)
                    .then(data => data.json())
                    .then(json => transform(json.drinks[0])) : {}
}

async function byFirstLetter(letter = 'a') {
    return fetch(`${path}/search.php?f=${letter}`)
        .then(data => data.json())
        .then(json => json.drinks?.map( arr => transform(arr)) )
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
                .filter(item => item[0].includes('strIngredient') && item[1])
                .map(item => item[1]),
        measure: Object.entries(obj)
                .filter(item => item[0].includes('strMeasure') && item[1])
                .map(item => item[1])
    }
}

export {detailsById, byFirstLetter, randomCocktail}
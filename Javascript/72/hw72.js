(async function () {
    'use strict';

    const theRecipes = $('#recipes');
    const theDiv = $('#theDiv');
    const recipeName = $('#recipeName');
    const image = $('#image');
    const ingredientsList = $('#ingredientsList');

    async function fetchFile(fileName) {
        try {
            const response = await fetch(`${fileName}`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const recipe = await response.json();
            return recipe;
        } catch (e) {
            console.error('OOPS, ERROR', e);
        }
    }

    const recipes = await fetchFile("recipes.json");
    console.log(recipes);
    recipes.forEach(r => {
        theRecipes.append(`<option value="${r.url}">${r.recipeName}</option>`);
    });

    $('#submit').click(async e => {
        e.preventDefault();
        console.log(theRecipes.val());
        const recipe1 = await fetchFile(theRecipes.val());
        console.log(recipe1);
        ingredientsList.empty();
        theDiv.show();
        recipeName.text(recipe1.recipeName);
        image.attr("src", recipe1.pic);
        recipe1.ingredients.forEach(a => {
            ingredientsList.append(`<li>${a}</li>`);
        });
    });

}());

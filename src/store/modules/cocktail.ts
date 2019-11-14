import axios from 'axios';
import {Module} from 'vuex';
import Cocktail from '@/components/models/cocktail';

const cocktail: Module<{cocktails: Cocktail[]}, any> = {
    namespaced: true,
    state: {
        cocktails: [],
    },
    mutations: {
        save(state, payload: {name: string, thumbnail: string, id: number, recipe: string, ingredient: object[]}) {
            const theCocktail = {
                name: payload.name,
                thumbnail: payload.thumbnail,
                id: payload.id,
                recipe: payload.recipe,
                ingredients: payload.ingredient};
            state.cocktails.push(theCocktail);
        },
        deleteAll(state, payload: {}) {
            // console.log(state.cocktails);
            state.cocktails = [];
        },
    },
    actions: {
        fetchCocktails(context, payload: {ingredient: string}) {
            context.commit('deleteAll', {});
            axios.get(
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + payload.ingredient,
            )
            .then((response) => (searchById(response.data)));
            function searchById(a: any) {
                a.drinks.forEach((aCocktail: any) => {
                    axios.get(
                        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + aCocktail.idDrink,
                    )
                    .then((response) => (lookUpDetails(response.data)));
                });
            }
            function lookUpDetails(b: any) {
                const listeIngredient = [];
                b = b.drinks[0];
                let j = 1;
                for (let i = 1; i < 16; i++) {
                    if (b['strIngredient' + i] !== undefined
                    && b['strIngredient' + i] !== null
                    && b['strIngredient' + i] !== '') {
                        const myCocktail = {
                            name : b['strIngredient' + i],
                            id : j,
                        };
                        listeIngredient.push(myCocktail);
                        j++;
                    }
                }
                context.commit('save', {
                    name: b.strDrink,
                    thumbnail: b.strDrinkThumb,
                    id: b.idDrink,
                    recipe: b.strInstructions,
                    ingredient: listeIngredient});
            }
        },
    },
};

export default cocktail;

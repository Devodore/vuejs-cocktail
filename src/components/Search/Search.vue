<template>
    <form @submit.prevent="cocktailList()">
        <input type="text" placeholder="Rechercher par ingrédient" v-model="ingredient"/>
        <input type="submit" value="Rechercher"/>
        <li v-for="cocktail in cocktails" :key="cocktail.id">
            <!--<p>{{cocktail.id}}</p>-->
            <div class="card">
                <p>{{cocktail.name}}</p>
                <img v-bind:src="cocktail.thumbnail"/>
                <div class="text">
                        <h2 class="recette">Recette: </h2>
                        <p class="recette">
                            <br>
                            {{cocktail.recipe}}
                        <p/>
                    <div class="ingredient_container" v-for="ingredient in cocktail.ingredients" :key="ingredient.id">
                        <p class="ingredient_text">Ingrédient {{ingredient.id}}: {{ingredient.name}}</p>
                    </div>
                </div>
            </div>
        </li>
    </form>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend( {
    computed: {
        ...mapState('cocktail', ['cocktails']),
    },
    data(): {ingredient: string} {
        return {
            ingredient: 'vodka',
        };
    },

    methods: {
        cocktailList(): void {
            // console.log(this.ingredient);
            this.$store.dispatch('cocktail/fetchCocktails', {ingredient: this.ingredient});
        },
    },
});
</script>

<style scoped>
    ul {
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    img {
        width: 30%;
        transition: all 0.2s;
        border-radius: 3px;
    }
    li {
        list-style-type: none;
    }
    div.card {
        /*border: solid black 1px;*/
        border-radius: 10px;
        box-shadow: 0px 0px 20px #d1d1d1;
        margin: 30px;
        padding: 10px;
    }
    div.text {
        margin-left: 30px;
        margin-right: 30px;
    }
    div.ingredient_container {
        text-align: left;
    }
    p.recette {
        text-align: justify;
    }
    p.ingredient_text {
        
    }
    h2.recette {
        align-content: center;
    }
</style>

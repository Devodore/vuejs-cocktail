import Cocktail from '@/components/models/cocktail';
import { MutationTree } from 'vuex';
import cocktail from './cocktail';


const mutations = cocktail.mutations as MutationTree<{ cocktails: Cocktail[] }>;
let state: { cocktails: Cocktail[] };

/*let ingredientsCocktail: {
    id: "14029",
    name: "'57 Chevy with a White License Plate",
    recipe: "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
    thumbnail: "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
}*/

describe('cocktails', () => {
  beforeEach(() => {
    state = {
      cocktails: [
        {
        id: 14029,
        name: "'57 Chevy with a White License Plate",
        recipe: '1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir',
        thumbnail: 'https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg' },
      ],
    };
  });

  it('should search for vodka', () => {

    //need to add mutations here
    //mutations.add(state, { id: "14029" });
    //mutations.add(state, { name: "A Gilligan's Island" });

    expect(typeof state.cocktails[1].id).toEqual('number');
    expect(typeof state.cocktails[1].name).toEqual("string");
  });
});
/*
  it('should remove done todos', () => {
    mutations.removeDone(state);

    expect(state.todos.length).toEqual(1);
    expect(state.todos[0].id).toEqual(1);
  });

  it('should set the done property', () => {
    mutations.setDone(state, {
      todo: { id: 1, name: 'eat', done: false, editing: false },
      done: true,
    });
    expect(state.todos[0].done).toBe(true);
  });

  it('should set the name property', () => {
    mutations.setName(state, {
      todo: { id: 1, name: 'eat', done: false, editing: false },
      name: 'sleep',
    });
    expect(state.todos[0].name).toEqual('sleep');
  });

  it('should enter edit mode', () => {
    mutations.enterEditMode(state, {
      todo: { id: 2, name: 'drink', done: true, editing: false },
    });
    expect(state.todos[1].editing).toBe(true);
  });

  it('should quit edit mode', () => {
    mutations.quitEditMode(state);
    expect(state.todos[0].editing).toBe(false);
  });
});*/
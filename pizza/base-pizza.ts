import { PizzaDetails, Ingredient } from '../models';
import { Equalness, UniqueList } from '../utils';

/**
 * A generic pizza. You extends this to add a new
 * type of pizza and privede the detals (name, price)
 * and the ingredient list.
 */
export class BasePizza implements Equalness<BasePizza> {

  pizzaDetails: PizzaDetails;
  ingredients: UniqueList<Ingredient>;

  constructor(
    pizzaDetails: PizzaDetails,
    ingredients: UniqueList<Ingredient>
  ) {
    this.pizzaDetails = pizzaDetails;
    this.ingredients = ingredients;
  }

  getPrice(): number {
    let ingredientsCost = 0;

    this.ingredients.forEach((currentIngredient: Ingredient) => {
      ingredientsCost += currentIngredient.getPrice();
    });

    return (this.pizzaDetails.getPrice() + ingredientsCost) * (this.pizzaDetails.quantity || 1);
  }

  isEqual(otherPizza: BasePizza): boolean {
    return this.pizzaDetails.isEqual(otherPizza.pizzaDetails);
  }

}

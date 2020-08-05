import { PizzaDetails, Ingredient } from '../models';
import { UniqueList } from '../utils';
import { BasePizza } from './base-pizza';

/**
 * This class constructs a new type of pizza for you.
 * Usage example:
 * 
 * let pizzaBuilder = new PizzaBuilder();
 * let awesomePizza = pizzaBuilder.setName("Awesome Pizza")
 *   .setPrice(10)
 *   .addIngredient("Tomatoes", 5)
 *   .addIngredient("Chorizo", 5)
 *   .addIngredient("Mushrooms", 5)
 *   .addIngredient("Mozzarella", 5)
 *   .build();
 * 
 * console.log('Pizza cost = ' + awesomePizza.getPrice());
 */
export class PizzaBuilder {
  private name: string;
  private price: number;
  private ingredients = new UniqueList<Ingredient>();

  /**
   * Set the name for the new pizza that is being built.
   * @returns the pizza builder instance
   */
  setName(name: string): PizzaBuilder {
    this.name = name;
    return this;
  }

  /**
   * Set the price for the new pizza that is being built.
   * @returns the pizza builder instance
   */ 
  setPrice(price: number): PizzaBuilder {
    this.price = price;
    return this;
  }

  /**
   * Add a new ingredient to the pizza that is being built.
   * @returns the pizza builder instance
   */
  addIngredient(
    ingredientName: string,
    ingredientPrice: number,
    ingredientQuantity?: number
  ): PizzaBuilder {
    this.ingredients.add(new Ingredient(ingredientName, ingredientPrice, ingredientQuantity || 1));
    return this;
  }

  /**
   * Builds a new pizza by using all the information provided so far.
   * @returns a new pizza instance
   */
  build(): BasePizza {
    return new BasePizza(new PizzaDetails(this.name, this.price, 1), this.ingredients);
  }
}

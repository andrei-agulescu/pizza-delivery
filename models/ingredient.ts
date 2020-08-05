import { Equalness } from '../utils';

export class Ingredient implements Equalness<Ingredient> {
  constructor(
    public name: string,
    public price: number,
    public quantity?: number
  ) {}

  isEqual(otherIngredient: Ingredient): boolean {
    return this.name === otherIngredient.name &&
           this.price === otherIngredient.price &&
           this.quantity === otherIngredient.quantity;
  }

  getPrice(): number {
    return this.price * (this.quantity || 1);
  }
}

import { Equalness } from '../utils';

export class PizzaDetails implements Equalness<PizzaDetails> {
  constructor(
    public name: string,
    public basePrice: number,
    public quantity?: number
  ) {}

  isEqual(otherDetails: PizzaDetails): boolean {
    return this.name === otherDetails.name && this.basePrice === otherDetails.basePrice;
  }

  getPrice(): number {
    return this.basePrice;
  }
}

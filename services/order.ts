import { User, DeliveryAddress, PizzaDetails } from '../models';
import { BasePizza } from '../pizza';
import { UniqueList } from '../utils';

export class ShoppingBasket {
  items = new UniqueList<BasePizza>();

  constructor() {}

  addItem(item: BasePizza): void {
    this.items.add(item, (thisItem: BasePizza, existingItem: BasePizza) => {
      const pizzaDetails = new PizzaDetails(
        thisItem.pizzaDetails.name,
        thisItem.pizzaDetails.basePrice,
        (thisItem.pizzaDetails.quantity || 1) + (existingItem.pizzaDetails.quantity || 1)
      );
      const newPizza = new BasePizza(
        pizzaDetails,
        thisItem.ingredients
      );
      return newPizza;
    });
  }

  prettyPrint(): void {
    let totalCost = 0;

    this.items.forEach((currentItem: BasePizza) => {
      console.log(`${currentItem.pizzaDetails.name} (x${currentItem.pizzaDetails.quantity || 1}) ... ${currentItem.getPrice()} LEI`);
      totalCost += currentItem.getPrice();
    });

    console.log(`Order total: ${totalCost} LEI`);
  }
}

export class OrderService {
  static placeOrder(user: User, deliveryAddress: DeliveryAddress, shoppingBasket: ShoppingBasket): void {
    console.log(`Order placed for ${user.firstName} ${user.lastName}:`);
    shoppingBasket.prettyPrint();
  }
}

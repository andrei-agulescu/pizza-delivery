import { User, DeliveryAddress } from './models';
import { PizzaBuilder } from './pizza';
import { RegistrationService, ShoppingBasket, OrderService } from './services';

let user = new User(
  'John',
  'Doe',
  'john.doe@email.com',
  '+40733245344'
);

let deliveryAddress = new DeliveryAddress(
  'Romania',
  'Bucharest',
  'Piata Unirii',
  'Bl 2C, Sc 3, Et 3',
  '+40733245344'
);

RegistrationService.getInstance().registerNewUser(user);

let pizzaBuilder = new PizzaBuilder();
let awesomePizza = pizzaBuilder.setName('Awesome Pizza')
  .setPrice(10)
  .addIngredient('Tomatoes', 5)
  .addIngredient('Chorizo', 5)
  .addIngredient('Mushrooms', 5, 2)
  .addIngredient('Mozzarella', 5, 2)
  .build();

let pizzaBuilder2 = new PizzaBuilder();
let lamePizza = pizzaBuilder2.setName('Lame Pizza')
  .setPrice(10)
  .addIngredient('Pineapple', 5)
  .addIngredient('Mozzarella', 5)
  .build();

let shoppingBasket = new ShoppingBasket();

// Add the same item twice
shoppingBasket.addItem(awesomePizza);
shoppingBasket.addItem(awesomePizza);

// Another pizza
shoppingBasket.addItem(lamePizza);

OrderService.placeOrder(user, deliveryAddress, shoppingBasket);

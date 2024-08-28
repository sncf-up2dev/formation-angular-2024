import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit';
import { BehaviorSubject, Observable, map } from 'rxjs';

export type FruitState = Readonly<Fruit> & { readonly quantity: number }
/*
    FruitState = {
      id: number;
      name: string;
      price: number;
      quantity: number;
    }
*/

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /* Le type du panier peut faire peur, nous allons le décomposer 
    - L'état du panier est stocké sous la forme d'une Map<K, V>
      - K est la clé de notre map, ici un nombre, qui va correspondre à l'id d'un fruit
      - V est un objet de type FruitState, qui est le type Fruit avec une quantité associée

    - Par exemple, pour représenter 10 oranges dans notre panier : 
      cart.set(2, { id: 2, name: "Orange", price: 3, quantity: 10 })
        - La clé est 2, id de notre fruit
        - { id: 2,
            name: "Orange",
            price: 3,
            quantity: 10
        } est un objet de type FruitState, qui représente le détail de notre fruit
  */
  private _cart: BehaviorSubject<ReadonlyMap<number, FruitState>>
    = new BehaviorSubject(new Map<number, FruitState>() as ReadonlyMap<number, FruitState>)
  cart$ = this._cart.asObservable().pipe(
    map(cartMap => [...cartMap.values()])
  )

  /* Pour ceux qui veulent aller plus loin :
  - Implémenter un observable nbArticles$, qui renvoie le nombre total d'articles
  - Implémenter un observable total$, qui renvoie le prix total du panier 
  */
  nbArticles$: Observable<number> = this.cart$.pipe(
    map(state => state.reduce((acc, val) => acc + val.quantity, 0))
  )
  total$: Observable<number> = this.cart$.pipe(
    map(state => state.reduce((acc, val) => acc + val.quantity * val.price, 0))
  )

  /* /!\ Pour les méthodes addFruit(), removeFruit() et removeAllFruitOfType(), attention à ne pas muter la Map existante */

  addFruit(fruit: Fruit) { // +
    /* Ajoute un fruit dans le panier */
    /* Deux cas à considerer :
        - Le type de fruit existe déjà dans le panier, dans ce cas incrémenter la quantité de 1
        - Le type de fruit n'existe pas encore, dans ce cas ajouter une entrée dans le panier
    */
    const fruitStateMapCopy = new Map(this._cart.getValue())
    const fruitState = fruitStateMapCopy.get(fruit.id)
    if (fruitState === undefined) {
      // Le fruit n'est pas présent dans la map
      fruitStateMapCopy.set(fruit.id, { ...fruit, quantity: 1 })
    } else {
      // Le fruit est présent dans la map
      fruitStateMapCopy.set(fruit.id, { ...fruitState, quantity: fruitState.quantity + 1 })
    }

    this._cart.next(fruitStateMapCopy)
  }

  removeFruit(fruit: Fruit) { // -
    /* Enlève un fruit dans le panier
    /* Deux cas à considerer :
        - Il reste un fruit de ce type dans le panier, enlever l'entrée dans la map
        - Il reste plusieurs fruits de ce type dans le panier, dans ce cas enlever tous les types de fruits 
    */
    const fruitStateMapCopy = new Map(this._cart.getValue())
    const fruitState = fruitStateMapCopy.get(fruit.id)

    if (fruitState === undefined)
      return

    fruitState.quantity === 1
      ? fruitStateMapCopy.delete(fruitState.id) // Enlever l'entrée du fruitState
      : fruitStateMapCopy.set(fruitState.id, { ...fruitState, quantity: fruitState.quantity - 1 })// Diminue de 1 la quantité

    this._cart.next(fruitStateMapCopy)
  }

  removeAllFruitOfType(fruit: Fruit) { // x
    /* Enlève tous les fruits d'un type dans le panier */
    const fruitStateMapCopy = new Map(this._cart.getValue())
    const fruitState = fruitStateMapCopy.get(fruit.id)

    if (fruitState === undefined)
      return

    fruitStateMapCopy.delete(fruitState.id)

    this._cart.next(fruitStateMapCopy)
  }
}

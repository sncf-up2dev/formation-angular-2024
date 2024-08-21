import { Injectable } from '@angular/core';
import { Fruit } from '../model/fruit';
import { BehaviorSubject, Observable, map } from 'rxjs';

export type FruitState = Fruit & { quantity: number }

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
  private _cart = new BehaviorSubject(new Map<number, FruitState>())
  cart$ = this._cart.asObservable().pipe(
    map(cartMap => [...cartMap.values()])
  )

  /* Pour ceux qui veulent aller plus loin :
  - Implémenter un observable nbArticles$, qui renvoie le nombre total d'articles
  - Implémenter un observable total$, qui renvoie le prix total du panier 
  */
  total$!: Observable<number>
  nbArticles$!: Observable<number>

  /* /!\ Pour les méthodes addFruit(), removeFruit() et removeAllFruitOfType(), attention à ne pas muter la Map existante */

  addFruit(fruit: Fruit) {
    /* Ajoute un fruit dans le panier */
    /* Deux cas à considerer :
        - Le type de fruit existe déjà dans le panier, dans ce cas incrémenter la quantité de 1
        - Le type de fruit n'existe pas encore, dans ce cas ajouter une entrée dans le panier
    */
  }

  removeFruit(fruit: Fruit) {
    /* Enlève un fruit dans le panier
    /* Deux cas à considerer :
        - Il reste un fruit de ce type dans le panier, enlever l'entrée dans la map
        - Il reste plusieurs fruits de ce type dans le panier, dans ce cas enlever tous les types de fruits 
    */
  }

  removeAllFruitOfType(fruit: Fruit) {
    /* Enlève tous les fruits d'un type dans le panier */
  }
}

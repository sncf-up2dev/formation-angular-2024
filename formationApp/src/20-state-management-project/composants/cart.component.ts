import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-cart',
  template: `
    <div class="box">
      <div>
        Contenu du panier :
      </div>
      <div class="box box-border">
      @for (entry of cartService.cart$ | async; track entry.id) {
        <div class="button-row">
          {{ entry.name }} - {{ entry.quantity }} 
          <button (click)="cartService.addFruit(entry)">+</button>
          <button (click)="cartService.removeFruit(entry)">-</button> 
          <button (click)="cartService.removeAllFruitOfType(entry)">x</button>
        </div>
      }
      </div>
      <div>
        Nombre d'articles : {{ cartService.nbArticles$ | async }}
      </div>
      <div>
        Coût total du panier : {{ cartService.total$ | async }}
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  cartService = inject(CartService)

}
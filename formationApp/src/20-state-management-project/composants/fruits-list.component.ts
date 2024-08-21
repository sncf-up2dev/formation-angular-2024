import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitService } from '../services/fruits.service';
import { CartService } from '../services/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-fruits-list',
  template: `
    <div class="box">
      @for (fruit of fruitList$ | async; track fruit.id) {
        <div>
          {{fruit.name}} - {{fruit.price}}€ 
          <button (click)="cartService.addFruit(fruit)">Ajouter</button>
        </div>
      }
    </div>
    
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FruitsListComponent {

  fruitsService = inject(FruitService)
  cartService = inject(CartService)

  fruitList$ = this.fruitsService.getFruitList()
}

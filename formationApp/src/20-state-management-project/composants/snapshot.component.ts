import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-snapshot',
    template: `
    <div class="box">
        <button (click)="0">Update</button>
      <div>
        Sauvegarde du panier :
      </div>
      <div class="box box-border">
      @for (entry of cartSnapshot$ | async; track entry.id) {
        <div class="button-row">
          {{ entry.name }} - {{ entry.quantity }} 
        </div>
      }
      </div>
      <div>
        Nombre d'articles : {{ nbArticlesSnapshot$ | async }}
      </div>
      <div>
        Coût total du panier : {{ totalSnapshot$ | async }}
      </div>
    </div>
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnapshotComponent {

    cartService = inject(CartService)

    cartSnapshot$ = this.cartService.cart$.pipe(
        first()
    )

    nbArticlesSnapshot$ = this.cartService.nbArticles$.pipe(
        first()
    )

    totalSnapshot$ = this.cartService.total$.pipe(
        first()
    )

}
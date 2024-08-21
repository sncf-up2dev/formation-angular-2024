import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./cart.component";
import { FruitsListComponent } from "./fruits-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CartComponent, FruitsListComponent],
  template: `
    <h1>Panier</h1>
    <div class="box">
      <app-cart />
    </div>
    <div class="box">
      <app-fruits-list />
    </div>
  `,
  styles: `
  
  `,
  host: {
    'class': 'content exercice'
  }
})
export class CartRootComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from "./cart.component";
import { FruitsListComponent } from "./fruits-list.component";
import { SnapshotComponent } from "./snapshot.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CartComponent, FruitsListComponent, SnapshotComponent],
  template: `
    <h1>Panier</h1>
    <div class="box">
      <app-cart />
    </div>
    <div class="box">
      <app-fruits-list />
    </div>
    <div class="box">
      <button (click)="activeSave = !activeSave" >Sauvegarder</button>
      @if(activeSave){
        <app-snapshot />
      }
    </div>
  `,
  styles: `
  
  `,
  host: {
    'class': 'content exercice'
  }
})
export class CartRootComponent {

  activeSave = false

}

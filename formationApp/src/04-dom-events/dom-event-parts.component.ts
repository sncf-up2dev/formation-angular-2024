import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content exercice">
      <h1>Structural Directives</h1>

      <!-- Lorsque l'on clique dans l'élément, inverser l'état de state -->
      <div class="box">
        {{ state }}
      </div>

      <!-- Lorsque l'on scrolle dans l'élément, incrémenter ou décrémenter la valeur de wheelCounter -->
      <div class="box">
        {{ wheelCounter }}
      </div>

      <!-- Le drag and drop se compose de 3 évènements : 
        - On maintient le clic 
        - On déplace la souris
        - On relache le clic -->
      <div class="box"> 
        Drag Me !
      </div>
    </div>

  `,
  styles: ``
})
export class DomEventPartsComponent {

  wheelCounter = 0

  state = false

}




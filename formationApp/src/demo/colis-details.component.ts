import { Component, Input } from "@angular/core";
import { Colis } from "../utils/colis";

@Component({
  selector: 'colis-detail',
  template: `
    <div class="box">
      <div>
        @if(selectedColis) {
          {{ selectedColis.details }}
        } @else {
          Aucun colis sélectionné
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class ColisDetailsComponent {

  @Input()
  selectedColis?: Colis = undefined

}

import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Colis} from "../utils/colis";

@Component({
    selector: 'colis-list',
    template: `

        <div class="card-container">
          @for (colis of colisList; track colis) {
          <button class="card" (click)="onSelectColis(colis)" tabindex="0">
            {{ colis.title }}
          </button>
          }
        </div>
    `,
    styles: ``
})
export class ColisListComponent {

  @Input() colisList: Colis[] = []
  @Output() selectedColis : EventEmitter<Colis> = new EventEmitter<Colis>()

  onSelectColis(colis: Colis) {
    this.selectedColis.emit(colis)
  }
}

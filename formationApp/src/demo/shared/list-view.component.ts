import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { ColisService } from "../features/colis/services/colis.service";

@Component({
  selector: 'list-view',
  standalone: true,
  template: `
      <div class="card-container">
        @for (item of list; track $index) {
        <button (click)="onClick.emit(item)" class="card" tabindex="0">
          {{ key ? item[key] : item }}
        </button>
        }
      </div>
    `,
})
export class ListViewComponent<T, K extends keyof T> {

  @Input({ required: true })
  list!: T[]

  @Input()
  key?: K

  @Output()
  onClick = new EventEmitter<T>()

}


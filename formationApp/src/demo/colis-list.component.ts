import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'colis-list',
  template: `
      <div class="card-container">
        @for (item of list; track $index) {
        <button (click)="onClick.emit(item)" class="card" tabindex="0">
          {{ key ? item[key] : item }}
        </button>
        }
      </div>
    `,
  styleUrls: ['./app.component.scss']
})
export class ColisListComponent<T, K extends keyof T> {

  @Input({ required: true })
  list!: T[]

  @Input()
  key?: K

  @Output()
  onClick = new EventEmitter<T>()

}

import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Colis } from "../../../utils/colis";
import { ActivatedRoute } from "@angular/router";
import { ColisService } from "./colis.service";
import { filter, map, Observable, switchMap } from "rxjs";

@Component({
  selector: 'colis-detail',
  template: `
    <h3>Details</h3>
    <div class="box">
      <div>
        @if(colis$ | async; as colis) {
          @for (entry of Object.entries(colis); track $index) {
            <div>
              {{ entry[0] }}: {{ entry[1] }}
            </div>
          }
        } @else {
          Aucun colis sélectionné
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColisDetailsComponent {

  Object = Object
  colisService = inject(ColisService)
  route = inject(ActivatedRoute)

  colis$: Observable<Colis> = this.route.paramMap.pipe(
    map(paramMap => paramMap.get("colisId")),
    filter(colisId => colisId !== null),
    switchMap(colisId => this.colisService.getColisById(colisId))
  )


}
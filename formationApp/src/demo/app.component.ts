import {Component, inject, Inject} from '@angular/core';
import {ColisService} from "./colis.service";
import {Colis} from "../utils/colis";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  colisService = inject(ColisService)

  title = 'Torticolis';

  colisList: Colis[] = this.colisService.getColisList()

  selectedColis?: Colis = undefined

}

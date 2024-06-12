import { Component } from '@angular/core';
import { Colis, colisList } from '../utils/colis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Torticolis';

  colisList = colisList

  selectedColis?: Colis = undefined


}

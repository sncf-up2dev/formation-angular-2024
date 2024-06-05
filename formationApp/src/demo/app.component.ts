import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { environment } from '../../environments/environment';

export type Feature = 'COLIS' | 'LIVRAISONS' | 'LOGIN'

@Component({
  selector: 'app-root',
  template: `
    <div class="content">

      <h1>{{ title }}</h1>

      <div class="card-container">
        <button routerLink="/colis" routerLinkActive="card-selected" class="card" tabindex="0">
          Colis
        </button>
        <button routerLink="/livraisons" routerLinkActive="card-selected" class="card" tabindex="0">
          Livraisons
        </button>
        <button routerLink="/connexion" routerLinkActive="card-selected" class="card" tabindex="0">
          Connexion
        </button>
      </div>

      <router-outlet></router-outlet>
      
    </div>
  `,
  styles: `
    :host {
      font-size: 32px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {

  title = environment.title;

  selectedFeature: Feature = "COLIS"

}



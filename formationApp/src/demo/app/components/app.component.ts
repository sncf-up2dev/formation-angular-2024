import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

export type Feature = 'COLIS' | 'LIVRAISONS'

@Component({
  selector: 'app-root',
  template: `
    <div class="content">

      <h1>{{ title }}</h1>

      <div class="card-container">
        <button (click)="selectedFeature = 'COLIS'" class="card" tabindex="0">
          Colis
        </button>
        <button (click)="selectedFeature = 'LIVRAISONS'" class="card" tabindex="0">
          Livraisons
        </button>
      </div>

      @switch(selectedFeature) {
        @case ("COLIS") {
            <colis-root />
        }
        @case ("LIVRAISONS") {
            <livraisons-root />
        }
      }

    </div>
  `,
  styles: `
    :host {
      font-size: 32px;
    }
  `

})
export class AppComponent {

  title = environment.title;

  selectedFeature: Feature = "LIVRAISONS"

}



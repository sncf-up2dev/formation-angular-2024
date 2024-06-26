import { Component, inject } from '@angular/core';
import { Colis } from '../../../utils/colis';
import { ColisService } from './colis.service';

@Component({
    selector: 'colis-root',
    template: `
        <h3>Liste des colis</h3>

        <list-view [list]="colisList" key="title" (onClick)="selectedColis = $event" />

        <h3>Details</h3>

        <colis-detail [selectedColis]="selectedColis" />
    `,
    host: {
        'class': 'content'
    }
})
export class ColisComponent {

    colisList = inject(ColisService).colisList

    selectedColis?: Colis = undefined

}


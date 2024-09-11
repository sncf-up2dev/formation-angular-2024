import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Colis } from '../../../utils/colis';
import { ColisService } from './colis.service';
import { Router } from '@angular/router';

@Component({
    selector: 'colis-root',
    template: `
        <h3>Liste des colis</h3>

        <list-view [list]="colisList$ | async" key="title" (onClick)="onColisSelected($event)" />

        <router-outlet></router-outlet>
    `,
    host: {
        'class': 'content'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColisComponent {

    colisService = inject(ColisService)
    router = inject(Router)

    colisList$ = this.colisService.getColis()
    selectedColis?: Colis = undefined

    onColisSelected(colis: Colis) {
        this.router.navigate([`colis/${colis.id}`])
    }

}


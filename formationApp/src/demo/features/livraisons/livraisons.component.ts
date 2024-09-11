import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LivraisonsService } from './livraisons.service';

@Component({
    selector: 'livraisons-root',
    template: `
        <h3>Livraisons</h3>

        <div class="box">
            @if(livraisons$ | async; as livraisons) {
                @for (livraison of livraisons; track livraison.id) {
                    <div>
                        {{ livraison.date | date }} - {{ livraison.colisId }}
                    </div>
                }
            }
        </div>
    `,
    host: {
        'class': 'content'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivraisonsComponent {

    livraisonsService = inject(LivraisonsService)

    livraisons$ = this.livraisonsService.getLivraisons()

}


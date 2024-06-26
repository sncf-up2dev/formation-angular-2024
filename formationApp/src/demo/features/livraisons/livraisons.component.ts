import { Component, inject } from '@angular/core';

@Component({
    selector: 'livraisons-root',
    template: `
        <h3>Livraisons</h3>

        <div class="box">
            Coming soon
        </div>
    `,
    host: {
        'class': 'content'
    }
})
export class LivraisonsComponent {
}


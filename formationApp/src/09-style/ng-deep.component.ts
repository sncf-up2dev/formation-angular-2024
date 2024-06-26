import { Component } from "@angular/core";

/* On suppose que l'on a pas accès au code de ce composant (venant d'une librairie externe 
    comme Angular Material) 
*/

@Component({
    standalone: true,
    imports: [],

    selector: 'app-external',
    template: `
        <div class="shared box box-border">
            Composant externe
        </div>
    `,
    styles: [`
        .shared {
            color: blue;
        }
    `],
})
export class ExternalComponent {

}

@Component({
    standalone: true,
    imports: [ExternalComponent],

    selector: 'app-ng-deep',
    template: `
        <div class="box">
            Composant Ng-Deep
            <app-external />
        </div>
    `,
    styles: [`
        :host {
            width: 100%;
        }
        :host ::ng-deep .shared {
            color: red !important
        }
    `],
})
export class NgDeepComponent {

}

@Component({
    standalone: true,
    imports: [NgDeepComponent],

    selector: 'app-root',
    template: `
        <div class="content example">
            <h1>::ng-deep et lazy loading</h1>
            <div class="box" (click)="displayed = true">

                <div class="shared">
                    Global : Blanc 
                </div>

                @if(displayed) {
                    <app-ng-deep />
                }
            </div>
        </div>
    `,
    styles: [`
        :host {
            width: 100%
        }
    `],
})
export class NgDeepLazyLoadComponent {

    displayed = false

}
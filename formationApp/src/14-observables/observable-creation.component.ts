import { Component, inject } from "@angular/core";
import { Observer, Subscription, of } from "rxjs";
import { ObservableService } from "./observable.service";
import { CommonModule } from "@angular/common";
import { HooksComponent } from "../12-lifecycle-hooks/hooks.component";

@Component({
    providers: [
    ],
    imports: [CommonModule, HooksComponent],
    standalone: true,
    selector: 'app-root',
    template: `
        <h1>Observables</h1>

        <!-- Ici le div n'est pas affiché lorsque l'observable émet 0, car c'est une valeur 'falsy' -->
        <div *ngIf="observableService.observable | async as value" class="box box-border">
            Consumer : {{ value }}
        </div>

        @if(observableService.person$ | async; as person) {
            <app-hook [inputPerson]="person" />
        }
    `,
    host: {
        'class': 'content example'
    }
})
export class ObservableCreationComponent {

    observableService = inject(ObservableService)

    observer: Observer<number> = {
        next: x => console.log('Observer got a next value: ' + x),
        error: err => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
    };
}
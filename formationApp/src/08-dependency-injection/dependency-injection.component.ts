/* Root Component */

import { Component, Optional, SkipSelf, inject } from "@angular/core"
import { CounterService, MinimalCounterService, SECOND_COUNTER_TOKEN } from "./dependency-injection.service"

@Component({
    providers: [
    ],

    selector: 'app-root',
    template: `
        <div class="content example">
            <h1>Injection de dépendances</h1>

            <div class="box">
                <app-father></app-father>
                <app-child></app-child>
            </div>
        </div>
    `,
    styleUrls: []
})
export class DependencyInjectionComponent {

}


/* Father component */

@Component({
    providers: [
        CounterService,
        { provide: MinimalCounterService, useExisting: CounterService }
    ],

    selector: 'app-father',
    template: `
    <div class="box box-border">
        FatherComponent
        <div>
            compteur : {{counterService.value}}
        </div>
        <app-child></app-child>
        <app-child></app-child>
    </div>
  `,
    styleUrls: [],
})
export class DependencyInjectionFatherComponent {

    constructor(
        public counterService: MinimalCounterService,
    ) { }

}


/* Child component */

@Component({
    providers: [
    ],

    selector: 'app-child',
    template: `
    <div class="box box-border">
      ChildComponent :
      <div>compteur 1 : {{firstCounterService.value}} <button (click)="increment1()">Increment 1</button> </div>
      <div>compteur 2 : {{secondCounterService.value}} <button (click)="increment2()">Increment 2</button></div>
    </div>
  `,
    styleUrls: []
})
export class DependencyInjectionChildComponent {

    secondCounterService = inject(SECOND_COUNTER_TOKEN)

    constructor(
        @Optional() @SkipSelf() public firstCounterService: CounterService
    ) {
        if (this.firstCounterService === null) {
            this.firstCounterService = new CounterService()
        }
    }

    increment1() {
        this.firstCounterService.incrementValue()
    }

    increment2() {
        this.secondCounterService.incrementValue()
    }

}
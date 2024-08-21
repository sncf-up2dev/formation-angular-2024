/* Root Component */

import { ChangeDetectionStrategy, Component, Optional, SkipSelf, forwardRef, inject } from "@angular/core"
import { StateManagementService } from "./state-management.service"
import { CommonModule } from "@angular/common"

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [forwardRef(() => StateManagementChildComponent), CommonModule],
    template: `
        <div class="content example">
            <h1>State Management</h1>
            
            <div class="box box-border">
                Root Component :
                <div> {{ state$ | async }} <button (click)="increment()">Increment</button> </div>
                <div class="box">
                    <app-child></app-child>
                    <app-child></app-child>
                </div>
            </div>
        </div>
    `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateManagemenComponent {

    counterService = inject(StateManagementService)
    state$ = this.counterService.state$

    increment() {
        this.counterService.increment()
    }

}

/* Child component */

@Component({
    standalone: true,
    selector: 'app-child',
    imports: [CommonModule],
    template: `
    <div class="box box-border">
      Child Component :
      <div> {{ state$ | async }}  <button (click)="increment()">Increment</button> </div>
    </div>
  `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateManagementChildComponent {

    counterService = inject(StateManagementService)
    state$ = this.counterService.state$

    increment() {
        this.counterService.increment()
    }

}
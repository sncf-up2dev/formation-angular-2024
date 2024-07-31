import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ObservableService } from '../observable.service';
import { Observable, map, from } from 'rxjs';
import { Person } from '../../utils/persons';
import { CreationOperatorsService } from './creation-operators.service';

type OBSERBABLE_TYPE = "PERSON" | "HORLOGE"

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="content exercice">
        <h1>Opérateurs de création</h1>
        <div class="box">
            <div>
                of()
                <div class="box box-border">
                    Consumer : {{ of$ | async }}
                </div>
            </div>
            <div>
                from()
                <div class="box box-border">
                    Consumer : {{ from$ | async }}
                </div>
            </div>
            <div>
                timer()
                <div class="box box-border">
                    Consumer : {{ timer$ | async }}
                </div>
            </div>
            <div>
                interval()
                <div class="box box-border">
                    Consumer : {{ interval$ | async }}
                </div>
            </div>
        </div>
    </div>
  `,
    styles: ``
})
export class CreationOperatorsComponent {

    constructor() {
        this.interval$.subscribe(console.log)
    }

    creationOperatorsService = inject(CreationOperatorsService)

    of$ = this.creationOperatorsService.of([1, 2, 3])

    from$ = this.creationOperatorsService.from([1, 2, 3])

    timer$ = this.creationOperatorsService.timer(1000)

    interval$ = this.creationOperatorsService.interval(1000)

}

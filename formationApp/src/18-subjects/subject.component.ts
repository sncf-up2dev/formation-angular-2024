import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, OperatorFunction, Subject, concatMap, count, exhaustAll, exhaustMap, filter, first, from, fromEvent, interval, last, map, mergeMap, of, range, reduce, scan, startWith, switchMap, take, takeLast, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { ObservableService } from '../14-observables/observable.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h1>Multicast</h1>

    <div class="button-row">
        <button (click)="subjects.pop()">-</button>
        <button (click)="subjects.push(null)">+</button>
        <button (click)="log()">Get Value</button>
    </div>

    <div class="box"> 
    @for (subject of subjects; track $index) {
        <div class="box-border">
            {{ subject$ | async }}
        </div>
    }
    </div>
  `,
    host: {
        'class': 'content example'
    },

})
export class MulticastComponent {

    subjects: null[] = []

    obsService = inject(ObservableService)

    coldObs$ = this.obsService.clock$
    hotObs$ = this.obsService.getHotClock()

    subject$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

    constructor() {
        this.coldObs$.subscribe(this.subject$)
    }

    log() {
        console.log(this.subject$.getValue())
    }

}

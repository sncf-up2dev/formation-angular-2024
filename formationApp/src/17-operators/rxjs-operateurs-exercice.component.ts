import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { EMPTY, Observable, OperatorFunction, concatMap, count, exhaustAll, exhaustMap, filter, first, from, fromEvent, interval, last, map, mergeMap, of, range, reduce, scan, startWith, switchMap, take, takeLast, takeUntil, takeWhile, tap, timeout, timer } from 'rxjs';
import { ObservableService } from '../14-observables/observable.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h1>Compteur de clicks</h1>

    <div class="box"> 
        <button (click)="visibility = !visibility">Start / Stop</button>
        <div class="box box-border">
            @if(visibility) {
                Click !
                {{ game$ | async }}
            }
        </div>
    </div>
  `,
    host: {
        'class': 'content exercice'
    },

})
export class RxjsOperateursExerciceComponent implements AfterViewInit {

    visibility = false

    click$?: Observable<Event>
    game$?: Observable<number | string>

    ngAfterViewInit(): void {
        this.click$ = fromEvent(document, 'click')

        this.game$ = this.click$.pipe(
            map(_ => 1),
            takeUntil(timer(5000)),
            reduce((acc, val) => acc + val),
            startWith("Counting...")
        )
    }

}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, OperatorFunction, count, filter, first, fromEvent, interval, last, map, range, reduce, scan, startWith, take, takeLast, takeUntil, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Exemples Operateurs</h1>
    <div class="box"> 
        <ng-container *ngFor="let observable of observables; index as i">
          <button (click)="visibility[i] = !visibility[i]">Ex {{i + 1}}</button>
          <div class="box box-border">
            <ng-container *ngIf="visibility[i]">
              {{ observable | async }}
            </ng-container>
          </div>
        </ng-container>
    </div>
  `,
  host: {
    'class': 'content example'
  },

})
export class RxjsOperateursQuizzComponent {

  slideObs$ = interval(1000).pipe( // 0 - 1 - 2 - 3 - 4 - .....
    take(5),      // 0 - 1 - 2 - 3 - 4T
    last(),       //                 4T
    tap(v => console.log(v)),
    startWith(0), // 0               4T 
  )

  mapObs$ = interval(1000).pipe(
    startWith(0), // Observable<number> 
    map(x => `Valeur ${x} émise`), // Observable<string> 
    map(x => 10 + x), // Observable<string> 
  )

  rangeObs$ = range(1, 10).pipe(
    last()
  )

  clickObs$ = fromEvent(document, 'click').pipe(
    map(_ => 1), // 1 - 1 - 1 - 1 - 1 - 1 - 1 - ...,
    reduce((acc, val) => {
      return acc + val
    }), // 1 - (1 + 1) = 2 - (2 + 1) = 3 - (3 + 1) = 4 - (4 + 1) = 5
  )

  firstObs$ = timer(2000).pipe( // S ---------------- 0
    map(_ => "Timer écoulé"),   // S ---------------- Timer écoulé
    first(),                    // S ---------------- Timer écoulé
    startWith("Chargement...")  // S Chargement.. ---------------- Timer écoulé
  )

  firstVariantObs$ = timer(5000).pipe( // S ---------------- 0T
    startWith("Chargement..."),        // S Chargement... ---------------- 0T
    map(_ => "Timer écoulé"),          // S Timer écoulé ---------------- Timer écouléT
    first()                            // S Timer écoulé T
  )

  counterObs$ = interval(100).pipe(    // S - 0 - 1 - 2 - ....
    map(t => (5000 - t * 100) / 1000), // S - 5,000 - 4,900 - 4,800 - ...
    takeWhile(v => v >= 0)             // S - 5,000 - 4,900 - 4,800 - ... 0,100 - 0T
  )

  observables: Observable<unknown>[] = [
    this.slideObs$,
    this.mapObs$,
    this.rangeObs$,
    this.clickObs$,
    this.firstObs$,
    this.firstVariantObs$,
    this.counterObs$
  ]

  visibility = this.observables.map(_ => false)


}

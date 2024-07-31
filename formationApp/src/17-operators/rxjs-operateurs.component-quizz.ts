import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, OperatorFunction, count, filter, first, fromEvent, interval, last, map, range, scan, startWith, take, takeLast, takeUntil, takeWhile, timer } from 'rxjs';

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
export class RxjsOperateursComponent {

  slideObs$ = interval(1000).pipe(
    take(5),
    last(x => x < 2),
    startWith(0),
  )

  mapObs$ = interval(1000).pipe(
    startWith(0),
    map(x => 10 * x),
    map(x => `Valeur ${x} émise`)
  )

  rangeObs$ = range(1, 10).pipe(
    last()
  )

  clickObs$ = fromEvent(document, 'click').pipe(
    map(_ => 1),
    scan((acc, val) => acc + val)
  )

  firstObs$ = timer(5000).pipe(
    map(_ => "Timer écoulé"),
    first(),
    startWith("Chargement...")
  )

  firstVariantObs$ = timer(5000).pipe(
    startWith("Chargement..."),
    map(_ => "Timer écoulé"),
    first()
  )

  counterObs$ = interval(100).pipe(
    map(t => (5000 - t * 100) / 1000),
    takeWhile(v => v >= 0)
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

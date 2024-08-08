import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { EMPTY, Observable, OperatorFunction, concatMap, count, exhaustAll, exhaustMap, filter, first, from, fromEvent, interval, last, map, mergeMap, of, range, reduce, scan, startWith, switchMap, take, takeLast, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { ObservableService } from '../14-observables/observable.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Operateurs</h1>

    <div class="box"> 
      <button (click)="visibility = !visibility">On/Off</button>
      <button #button>Event</button>
      <div class="box box-border">
        @if(visibility) {
          {{ highOrder$ | async }}
        }
      </div>
    </div>
  `,
  host: {
    'class': 'content example'
  },

})
export class RxjsOperateursComponent implements AfterViewInit {

  visibility = false

  obsService = inject(ObservableService)

  @ViewChild('button', { static: true })
  eventButton!: ElementRef<HTMLButtonElement>

  obs$ = this.obsService.clock$.pipe(
    tap(v => console.log(v))
  )

  clickObs$?: Observable<Event>
  highOrder$?: Observable<string>

  ngAfterViewInit(): void {
    this.clickObs$ = fromEvent(this.eventButton?.nativeElement, 'click')

    this.highOrder$ = this.clickObs$.pipe(
      exhaustMap(_ => this.obsService.getNameClock())
    )
  }

}

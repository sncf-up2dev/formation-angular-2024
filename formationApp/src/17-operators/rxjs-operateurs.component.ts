import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { EMPTY, Observable, OperatorFunction, count, filter, first, from, fromEvent, interval, last, map, of, range, scan, startWith, take, takeLast, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { ObservableService } from '../14-observables/observable.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Operateurs</h1>
    <div class="box"> 
      {{ obs$ | async }}
    </div>
  `,
  host: {
    'class': 'content example'
  },

})
export class RxjsOperateursComponent {

  obsService = inject(ObservableService)

  obs$ = interval(1000).pipe(
    tap(console.log)
  )

}

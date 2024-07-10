import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HooksComponent } from '../12-lifecycle-hooks/hooks.component';
import { ObservableService } from './observable.service';
import { MyAsyncPipe } from './my-async.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HooksComponent, MyAsyncPipe, CommonModule],
  template: `
    <div class="content exercice">
        <h1>Pipe Async</h1>

        <div *ngIf="observableService.observable | myAsync as value" class="box box-border">
            Consumer : {{ value }}
        </div>

        @if(observableService.personObservable | myAsync; as person) {
            <app-hook [inputPerson]="person" />
        }
    </div>
  `,
  styles: ``
})
export class MyAsyncComponent {

  observableService = inject(ObservableService)

}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MyAsyncPipe } from './my-async.pipe';
import { ObservableService } from '../observable.service';
import { Observable } from 'rxjs';
import { Person } from '../../utils/persons';

type OBSERBABLE_TYPE = "PERSON" | "HORLOGE"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MyAsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="content exercice">
        <h1>Pipe Async</h1>

        <div class="box">

          <div>
            Null input
            <div class="box box-border">
                Consumer : {{ null | myAsync }}
            </div>
          </div>

          <div>
            Observable <button (click)="showWindow = !showWindow">Switch</button>
            <div class="box box-border">
                @if(showWindow) {
                  Consumer : {{ observableService.clock$ | myAsync }}
                }
            </div>
          </div>

          <div>
            Chagement d'observable
            <button (disabled)="currentSwitch === 'PERSON'" 
              (click)="currentSwitch = 'PERSON'; observable = observableService.person$">Person</button>
            <button (disabled)="currentSwitch === 'HORLOGE'" 
              (click)="currentSwitch = 'HORLOGE'; observable = observableService.clock$">Horloge</button>
            <div class="box box-border">
                Consumer : {{ observable | myAsync }}
            </div>
          </div>

        </div>
        
    </div>
  `,
  styles: ``
})
export class MyAsyncComponent {

  showWindow = true
  currentSwitch: OBSERBABLE_TYPE = 'PERSON'

  observableService = inject(ObservableService)
  observable: Observable<Person | Number> = this.observableService.person$

}

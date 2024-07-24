import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DefaultComponent, PushBranchComponent } from './detection-dirty.component';
import { getRandomPerson } from '../utils/persons';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>On Push</h1>
    <div class="box">
      Root
      <app-push-branch />
      <app-default [person]="person" />
      <button (click)="newPerson()">Mutate</button>
    </div>
  `,
  host: {
    'class': 'content example'
  },
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [DefaultComponent, PushBranchComponent]
})
export class DetectionRootComponent {

  person = getRandomPerson()

  newPerson() {
    this.person = { ...this.person, age: this.person.age + 1 }
  }

}

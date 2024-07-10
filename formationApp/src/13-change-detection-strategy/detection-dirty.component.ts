import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getRandomPerson } from '../utils/persons';
import { CommonModule } from '@angular/common';
import { Person } from '../utils/persons';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule],
  template: `
  Default -
  @if(person) {
    {{ printPerson() }}
  }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  host: {
    'class': 'box box-border',
    '(click)': "0"
  },
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent {

  @Input()
  person?: Person

  printPerson(): string {
    console.log("printPerson() " + this?.person?.name)
    return `${this?.person?.name} ${this?.person?.age}`
  }

}

@Component({
  selector: 'app-push-leaf',
  standalone: true,
  imports: [],
  template: `
    OnPushLeaf - {{ printNumber() }}
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  host: {
    'class': 'box box-border',
    '(click)': "addNumber()"
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushLeafComponent {

  @Input()
  number = 0

  addNumber() {
    this.number++
    console.log(`OnPushLeaf : Click (${this.number})`)
  }

  printNumber(): number {
    console.log("printNumber() (leaf) " + this.number)
    return this.number
  }

}

@Component({
  selector: 'app-push-branch',
  standalone: true,
  imports: [PushLeafComponent, DefaultComponent],
  template: `
    OnPushBranch - {{ printNumber() }} <button (click)="addNumber()">++</button>
    <app-push-leaf [number]="number" />
    <app-push-leaf />
    <app-default [person]="person" />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  host: {
    'class': 'box box-border'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushBranchComponent {

  number = 5
  person = getRandomPerson()

  printNumber(): number {
    console.log("printNumber() (branch) " + this.number)
    return this.number
  }

  addNumber() {
    this.number++
    console.log(`OnPushBranch : Click (${this.number})`)
  }

}
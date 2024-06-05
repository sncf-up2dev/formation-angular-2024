import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="box">
        <div>Valeur dans le fils : {{value}} <button (click)="addValue()">Value++</button></div>
      </div>
  `,
  styles: ['']
})
export class ChildInputComponent {

  @Input({
    required: true
  })
  value: number = 0;

  addValue() {
    this.value++
  }

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildInputComponent],
  template: `
    <div class="content example">
      <h1>Input</h1>
      <div class="box">
        <div> Valeur dans le père : {{value}} <button (click)="addValue()">Value++</button> </div>
        <app-child [value]="value"> </app-child>
    </div>
  </div>
  `,
  styles: ['']
})
export class ParentInputComponent {

  value: number = 10;

  addValue() {
    this.value++
  }

}

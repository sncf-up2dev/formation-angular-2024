import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-root',
  template: `
    <div class="content example">
      <h1>Interpolations et tableaux</h1>

      <div class="box">
        <div>Taille du tableau : {{ numbers.length }}</div>
        <div>[ {{ numbers }} ]</div>
        <div>Dernier élément du tableau : {{ numbers[numbers.length-1] }}</div>
      </div>
      
      <div class="button-row">
        <button (click)="push()">Push</button>
        <button (click)="pop()">Pop</button>
        <button (click)="addToLastElement()">Incrément</button>
        <button (click)="update()">Maj.</button>
      </div>
    </div>
  `
})
export class InterpolationTableauComponent {

  numbers: number[] = [0, 1]

  push() {
    this.numbers.push(this.numbers.length)
    console.log(this.numbers)
  }

  pop() {
    this.numbers.pop()
    console.log(this.numbers)
  }

  addToLastElement() {
    this.numbers[this.numbers.length - 1]++
    console.log(this.numbers)
  }

  update() {
    this.numbers = [...this.numbers]
    console.log(this.numbers)
  }

}

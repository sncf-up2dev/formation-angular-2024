import { Component, Directive, TemplateRef } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],

  selector: 'app-root',
  template: `
    <div class="content example">
      <h1>Structural Directives</h1>

      <div class="box">
        <ul>
          <li>Hip, Hip, Hip, <div *ngIf="condition">Houra</div></li>
          <li>Hip, Hip, Hip, <ng-container *ngIf="condition">Houra</ng-container></li>
          <li>Hip, <ng-container>Hip,</ng-container> Hip, <ng-template [ngIf]="condition">Houra</ng-template></li>
        </ul>
      </div>

      <div class="box">
          @if(numbers.length) {
            <div>
                [
                <ng-container [class.red]="o" *ngFor="let item of numbers; let l=last; odd as o">
                    {{ item }} <ng-container *ngIf="!l">,</ng-container>
                </ng-container>
                ]
            </div>
          } @else {
            <div>
              La liste est vide
            </div>
          }
          <div class="button-row">
              <button (click)="push()">Push</button>
              <button (click)="pop()">Pop</button>
              <button (click)="addToLastElement()">Incrément</button>
          </div>
      </div>
    </div>
  `,
  styles: `
    .red {
      color: red;
    }
  `
})
export class StructuralDirectivesComponent {

  condition = true;

  numbers: number[] = [0, 1, 2]

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

}


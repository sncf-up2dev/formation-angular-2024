import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content example">
      <h1>DatePipe</h1>
      <div class="box">
        <div> Date avec un nombre : {{ dateNumber | date }}</div>
        <div> Date avec un objet Date : {{ dateObj | date }}</div>
      </div>
    
      <div class="button-row">
        <button (click)="addTime()" >Ajouter</button>
        <button (click)="refresh()" >Refresh</button>
      </div>
    <div>
  `,
  styles: ['']
})
export class PipeDateComponent {

  readonly DAY = 24 * 60 * 60 * 1000

  dateObj: Date = new Date()
  dateNumber: number = this.dateObj.getTime();

  addTime() {
    this.dateNumber += this.DAY
    this.dateObj.setTime(this.dateNumber)

    console.log(this.dateNumber)
    console.log(this.dateObj)
  }

  refresh() {
    this.dateObj = new Date(this.dateObj)
  }

}

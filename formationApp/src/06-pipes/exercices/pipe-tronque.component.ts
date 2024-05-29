import { Component, Pipe, PipeTransform, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'tronque',
  standalone: true
})
export class TronquePipe implements PipeTransform {

  transform(value : string, length: number = 10): string {
    return value.length > length ? value.slice(0, length) + '...' : value;
  }

}

@Component({
  standalone: true,
  imports: [CommonModule, TronquePipe, FormsModule],

  selector: 'app-root',
  template: `
    <div class="content exercice">
      <h1>TronquePipe</h1>
      <div class="box">
        <input [(ngModel)]="texte">
        <div>Texte original     : {{ texte }} </div>
        <div>Texte tronqué      : {{ texte | tronque }} </div>
        <div>Texte tronqué à 0  : {{ texte | tronque:0 }} </div>
        <div>Texte tronqué à 20 : {{ texte | tronque:20 }} </div>
      </div>
    </div>
`,
  styles: ['']
})
export class PipeTronqueComponent {
  texte = 'Mon texte'
}

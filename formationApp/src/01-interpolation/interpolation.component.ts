import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { names } from '../utils/persons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `

  <div class="content example">
    <h1>Interpolations a ne pas faire</h1>
    <div class="box" (mousemove)="0">

        <div>{{ timer | async }}</div>

        <div>Effet de bord : {{ getLast() }}</div>
        <div>Random : {{ getRandomName() }}</div>
        <div>Opréation complexe : {{ lowestNumber() }} </div>
      
    </div>
  </div>
  `,
  styles: ['']
})
export class InterpolationComponent {

  names: string[] = names

  getRandomName(): string {
    return names[Math.floor(Math.random() * this.names.length)];
  }

  getLast() {
    return names.pop()
  }

  // Taille du tableau, à modifier pour voir l'impact sur les performances
  arraySize = 10000

  numbers: number[] = [...Array(this.arraySize)].map(() => Math.floor(Math.random() * 10000))

  lowestNumber(): number {
    return this.numbers.sort()[0];
  }

  // Compteur utilisant un observable. Les observables seront vus plus tard dans le cours, 
  // pas besoin de se préoccuper de l'implémentation maintenant
  timer = interval(100)

}

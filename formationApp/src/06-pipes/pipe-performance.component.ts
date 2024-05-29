import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'toUpperCase',
  standalone: true
})
export class ToUpperCasePipe implements PipeTransform {

  transform(value: string): string {
    console.log("appel pipe")
    return value.toUpperCase();
  }

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ToUpperCasePipe],
  template: `
    <div class="content example">
      <h1>Pipes et performance</h1>
      <div class="box" (mousemove)="0">
        <input [(ngModel)]="texte" />

        <div>{{ toUpperCase(texte) }}</div>
        <div>{{ texte | toUpperCase }}</div>
      </div>
    </div>
  `,
  styleUrls: []
})
export class PipesPerformanceComponent {

  toUpperCase(input: string): string {
    console.log("appel methode")
    return input.toUpperCase();
  }

  texte = 'Exemple de texte'

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-root',
  template: `
    <div class="content example">
      <h1>Object binding</h1>
      <div>
        Clé : <input #cle /> 
      </div>
      <div>
        Valeur : <input #valeur /> 
      </div>
      <div class="button-row">  
        <button (click)="addStyle(cle.value, valeur.value)">Ajouter</button>
        <button (click)="refresh()">Mise à jour</button>
      </div>
      <div class="box" [ngStyle]="styles">Texte avec mon style</div>
    </div>
  `,
})
export class StyleClassObjectComponent {

  styles: Record<string, string> = { 'font-size': '40px' }

  addStyle(key: string, value: string) {
    this.styles[key] = value;
    console.log(this.styles)
  }

  refresh() {
    this.styles = { ...this.styles }
  }

}

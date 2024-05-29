import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Personne {
  nom: string,
  prenom: string,
}

@Pipe({
  name: 'formatNom',
  standalone: true,
})
export class FormatNomPipe implements PipeTransform {

  state: number = 0

  transform(value: { prenom: string, nom: string }) {
    return `Bonjour ${value.prenom} ${value.nom} !`
  }

}

@Component({
  standalone: true,
  imports: [CommonModule, FormatNomPipe, FormsModule],

  selector: 'app-root',
  template: `
    <div class="content example">
      <h1>Pipes et objets</h1>
      <div class="box">
        <div>{{ personne | formatNom }}</div>
        <input [(ngModel)]="personne.nom" /> {{personne.nom}} <br/>
        <input [(ngModel)]="personne.prenom" /> {{personne.prenom}} <br/>
        <button (click)="refresh()">Mise à jour</button>
      </div>
    </div> 
    `,
  styles: ['']
})
export class PipesObjectComponent {

  personne: Personne = {
    nom: 'Fry',
    prenom: 'Lucian'
  }

  refresh() {
    this.personne = { ...this.personne }
  }

}

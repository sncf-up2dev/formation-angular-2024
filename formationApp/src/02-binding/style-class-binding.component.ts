import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],

  selector: 'app-root',
  template: `
    <div class="content example">
      <h1> {{description}} </h1>

      <h2>Class</h2>
      <div class="box">
        <div [class]="classObject"> Classe avec un objet </div>
        <div [class]="classeArray"> Classe avec un tableau </div>
        <div [class]="classeString"> Classe avec un string</div>
        <input [(ngModel)]="classeString" />
      </div>

      <h2>Style</h2>

      <div class="box">
        <div [style]="styleObject"> Style avec un objet</div>
        <div [style]="styleString"> Style avec un string</div>
        <input [(ngModel)]="styleString" />
      </div>
    </div>
  `,
  styles: `
    .texte-vert {
        color: green;
    }

    .texte-noir {
        color: black;
    }

    .fond-gris {
        background-color: gray;
    }

    .contour-bleu {
        border: 5px solid blue;
    }
  `
})
export class StyleClassBindingComponent {

  description = 'Style / Class binding'

  classObject = { 'texte-vert': true, 'fond-gris': true, 'contour-bleu': true }
  classeArray = ['texte-noir', 'fond-gris']
  classeString = 'fond-gris contour-bleu contour-bleu'

  styleObject = { color: 'white', 'background-color': 'blue' }
  styleString = 'font-size: 20px'

}

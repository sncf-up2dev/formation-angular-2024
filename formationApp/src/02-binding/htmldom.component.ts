import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="content example">
    <h1>HTML / DOM binding</h1> 

    <div class="box">
      <input [disabled]="condition">
      <input [attr.disabled]="conditionAttr">
    </div>

    <div class="box">
        <input #html value="Html attribute" (input)="0">
        <button (click)="modifyHTML(html)">Modify HTML attribute</button>
        <div>DOM Property : {{html.value}}</div>
        <div>HTML Attribute : {{html.getAttribute('value')}}</div>
    </div>

    <div class="box">
        <input #composant [value]="valeurComposant" (input)="0">
        <div>DOM Property : {{composant.value}}</div>
        <div>HTML Attribute : {{composant.getAttribute('value')}}</div>
        <div>Propriété du composant : {{valeurComposant}}</div>
        <button (click)="modifyComposant()">Changer la valeur du composant une fois</button>
        <button (click)="modifyComposantWithI()">Changer la valeur du composant plusieurs fois</button>
    </div>

    </div>
  `,

  standalone: true,
  imports: [CommonModule],
})
export class HtmldomComponent {

  condition: boolean = true;
  conditionAttr = "bonjour"

  modifyHTML(element: HTMLInputElement) {
    element.setAttribute('VaLuE', element.value);
  }

  valeurComposant = "Property binding";

  modifyComposant() {
    this.valeurComposant = "Valeur modifiée"
  }

  i = 0;
  modifyComposantWithI() {
    this.valeurComposant = "Valeur modifiée " + this.i++;

  }

}

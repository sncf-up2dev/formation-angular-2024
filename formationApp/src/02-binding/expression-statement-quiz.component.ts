import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { names } from '../utils/persons';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-root',
  template: ` 
    <div class="content example">
      <h1>Expression Statement Quiz</h1> 
      <div class="box">
        
      </div>
    </div>
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class ExpressionStatementQuizComponent {

  refConsole: Console = console;

  refName = names

  valeurX: number = 120;
  objetX = { propriete: 1 }

  objetAny: any;
  valeurAny: any;

  methodeX(input: number) {
    input = 2 * ('bonjour' as any)
    console.log(input)
    return input
  }

  methodeXObject(input: any) {
    input.propriete = input.propriete * 2
    console.log(input.propriete)
  }

  methodeY(input: MouseEvent) {
    console.log(input)
  }

  methodWithSideEffect(): number {
    this.valeurX += 10;
    return this.valeurX
  }

  getProprieteX(): number {
    return this.objetX.propriete
  }

}

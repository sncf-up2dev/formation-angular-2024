import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    
    <div class="content example">
      <h1>XSS Attack</h1>

      <div>
        <input #input />
        <button (click)="click(input)">Validate</button>
      </div>
      <div #out class="box"></div>
    </div>
  `,
  styles: [
  ]
})
export class XssAttackComponent {

  @ViewChild('out')
  viewChildRef!: ElementRef<HTMLDivElement>

  click(e: HTMLInputElement) {
    let el = document.createElement('div')
    el.innerHTML = e.value
    this.viewChildRef.nativeElement.appendChild(el)
  }

}

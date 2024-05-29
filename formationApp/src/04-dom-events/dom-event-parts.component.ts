import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content exercice">
      <!-- Lorsque l'on clique dans l'élément, inverser l'état de state -->
      <div (click)="onClick()" class="box">
        {{ state }}
      </div>

      <!-- Lorsque l'on scrolle dans l'élément, incrémenter ou décrémenter la valeur de wheelCounter -->
      <div (wheel)="onWheel($event)" class="box">
        {{ wheelCounter }}
      </div>

      <!-- Le drag and drop se compose de 3 évènements : 
        - On maintient le clic 
        - On déplace la souris
        - On relache le clic -->
      <div class="box"
        (mousedown)="onMouseDown($event)"
        (mousemove)="onMouseMove($event)"
        (mouseup)="onMouseUp($event)"
        [style.transform]="getTranformation()"  
      > 
        Drag Me !
      </div>
    </div>

  `,
  styles: ``
})
export class DomEventPartsComponent {

  // Play/Pause

  state = false

  onClick() {
    this.state = !this.state
  }

  // Scroll

  wheelCounter = 0

  onWheel(event: WheelEvent) {
    event.preventDefault()
    event.deltaY < 0 ? this.wheelCounter-- : this.wheelCounter++
  }

  // Drag and drop

  translation = { x: 0, y: 0 }
  clickPosition = { x: 0, y: 0 }
  isDragging = false

  onMouseDown(event: MouseEvent) {
    this.isDragging = true

    this.clickPosition.x = event.pageX - this.translation.x
    this.clickPosition.y = event.pageY - this.translation.y
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.translation.x = event.pageX - this.clickPosition.x
      this.translation.y = event.pageY - this.clickPosition.y
    }
  }

  getTranformation() {
    return `translate(${this.translation.x}px, ${this.translation.y}px)`
  }

}




import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `    
    <video #video
      (click)="onClick(video)"
      (wheel)="onWheel($event, video)"
      (mousedown)="onMouseDown($event)"
      (mousemove)="onMouseMove($event)"
      (mouseup)="onMouseUp($event)"
      [style.transform]="getTranformation()"  
    >
      <source src="../assets/video.mp4"/>
    </video>
  `,
})
export class DomEventComponent {

  // Play/Pause

  onClick(media: HTMLMediaElement) {
    if (!this.wasDragged) {
      media.paused ? media.play() : media.pause()
    }
  }

  // Scroll

  onWheel(event: WheelEvent, media: HTMLMediaElement) {
    event.preventDefault()
    event.deltaY < 0 ? media.currentTime-- : media.currentTime++
  }

  // Drag and drop

  translation = { x: 0, y: 0 }
  clickPosition = { x: 0, y: 0 }
  isDragging = false
  wasDragged = false

  onMouseDown(event: MouseEvent) {
    this.isDragging = true
    this.wasDragged = false

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
    this.wasDragged = true
  }

  getTranformation() {
    return `translate(${this.translation.x}px, ${this.translation.y}px)`
  }

}

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <video #video (click)="onClick(video)" (wheel)="onScroll(video, $event)" (mousemove)="onDrag($event)"
           (mousedown)="isDragged = true" (mouseup)="isDragged = false">
      <source src="../assets/video.mp4"/>
    </video>
  `,
})
export class DomEventComponent {
  isDragged: boolean = false
  delta: { x: number, y: number } = {x: 0, y: 0}

  onClick(video: HTMLVideoElement): void {
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  onScroll(video: HTMLVideoElement, event: WheelEvent): void {
    if (event.deltaY > 0) {
      video.currentTime += 1
    } else {
      video.currentTime -= 1
    }
  }

  onDrag($event: MouseEvent): void {
    if (!this.isDragged) return
    const video : HTMLVideoElement | null = document.querySelector('video')
    const deltaX : number = $event.movementX
    const deltaY : number = $event.movementY
    this.delta.x += deltaX
    this.delta.y += deltaY
    if (video) {
      video.style.transform = `translate(${this.delta.x}px, ${this.delta.y}px)`
    }
  }
}

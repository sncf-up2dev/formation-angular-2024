import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <video #video
           (click)="onClick(video)"
           (wheel)="onScroll(video, $event)"
           (mousemove)="onDrag($event)"
           (mousedown)="onMousedown()"
           (mouseup)="onMouseup()">
      <source src="../assets/video.mp4"/>
    </video>
  `,
})
export class DomEventComponent {
  isDragged: boolean = false
  delta: { x: number, y: number } = {x: 0, y: 0}

  onClick(video: HTMLVideoElement): void {
    video.paused ? video.play() : video.pause();
  }

  onScroll(video: HTMLVideoElement, event: WheelEvent): void {
   video.currentTime += event.deltaY / 100
  }

  onDrag($event: MouseEvent): void {
    if (!this.isDragged) return
    const video : HTMLVideoElement | null = document.querySelector('video')
    if (!video) return

    const deltaX : number = $event.movementX
    const deltaY : number = $event.movementY
    this.delta = {x: this.delta.x + deltaX, y: this.delta.y + deltaY}

    video.style.transform = `translate(${this.delta.x}px, ${this.delta.y}px)`
  }

  onMousedown(): void {
    this.isDragged = true
  }

  onMouseup(): void {
    this.isDragged = false
  }
}

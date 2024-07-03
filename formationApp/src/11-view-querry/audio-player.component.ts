import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>View Children</h1>

    <div class="button-row">
      <button (click)="addTrack()">Ajouter</button>
      <button (click)="removeTrack()">Supprimer</button>
    </div>
    <div class="box">

      @for (source of sources; track $index) {
        <div>
          <audio #audio controls [src]="source" ></audio> 
          <button (click)="playPause(audio)">Play / Pause</button>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
    }
  `,
  host: {
    'class': 'content example'
  }
})
export class AudioPlayerComponent {

  sources: string[] = [
    "../assets/sample.mp3",
    "../assets/sample.mp3",
    "../assets/sample.mp3",
    "../assets/sample.mp3",
  ]

  addTrack() {
    this.sources.push("../assets/sample.mp3")
  }

  removeTrack() {
    this.sources.pop()
  }

  playPause(audio: HTMLAudioElement) {

  }

}

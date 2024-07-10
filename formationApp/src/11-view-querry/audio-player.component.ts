import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

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
          <audio #audio [src]="source" ></audio> 
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

  button = false

  @ViewChildren('audio')
  audioPlayers?: QueryList<ElementRef<HTMLAudioElement>>

  sources: string[] = [
    "../assets/sample.mp3",
    "../assets/sample.mp3",
    "../assets/sample.mp3",
    "../assets/sample.mp3",
  ]

  addTrack() {
    this.sources.push("../assets/sample.mp3")
    this.button = true
  }

  removeTrack() {
    this.sources.pop()
  }

  playPause(audio: HTMLAudioElement) {
    if (audio.paused) {
      this.audioPlayers?.forEach(
        (audioPlayer) => audioPlayer.nativeElement.pause()
      )
      audio.play()
    } else {
      audio.pause()
    }
  }

}

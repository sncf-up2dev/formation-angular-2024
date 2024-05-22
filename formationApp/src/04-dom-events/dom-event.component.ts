import { Component, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `    
    <video #video>
      <source src="../assets/video.mp4"/>
    </video>

    <!-- Exemple d'utilisation de la variable de template : -->
    <button (click)="testVariable(video)">Test</button>
  `,
})
export class DomEventComponent {

  testVariable(video: HTMLVideoElement) {
    console.log(video)
  }

}

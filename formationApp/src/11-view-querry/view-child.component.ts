import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../08-dependency-injection/dependency-injection.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #boite>Composant fils</div>
    {{cpt.value}}
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `],
  providers: [
    CounterService
  ],
  host: {
    'class': 'box box-border'
  }
})
export class ChildComponent {
  cpt = inject(CounterService)

  @HostListener('click')
  increment() {
    this.cpt.incrementValue()
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  providers: [
    CounterService
  ],
  template: `
    <div class="content example">
      <h1>View Child</h1>

      <audio #audio src="../assets/sample.mp3" ></audio>

      <div class="button-row">
        <button (click)="audio.play()">Play</button>
        <button (click)="audio.pause()">Pause</button>
        <button (click)="playPause()">
          Play / Pause
        </button> 
        <button (click)="printQueriesValues()">
          Valeurs des queries
        </button> 
      </div>

      @if (!audio.paused) {
        Playing...
      }

      <app-child class="box"></app-child>
    </div>
  `
})
export class ViewChildComponent implements OnInit {

  @ViewChild('audio', { static: true })
  audioRef?: ElementRef<HTMLAudioElement>

  playPause() {
    this.audioRef?.nativeElement.paused
      ? this.audioRef?.nativeElement.play()
      : this.audioRef?.nativeElement.pause()
  }

  ngOnInit() {
    this.audioRef?.nativeElement.play()
    setTimeout(() => this.audioRef?.nativeElement.pause(), 3000)
  }

  @ViewChild(ChildComponent)
  childComponent?: ChildComponent

  @ViewChild(CounterService)
  counterService?: CounterService

  /* ViewQueries sur les éléments du composant fils */

  @ViewChild(ChildComponent, { read: ElementRef })
  childRef!: ElementRef<HTMLElement>

  @ViewChild(ChildComponent, { read: CounterService })
  childServiceRef?: CounterService

  @ViewChild('boite')
  childElementRef?: ElementRef<HTMLDivElement>

  /* Affichage des valeurs des queries */

  printQueriesValues() {
    console.log(this.childComponent) // Référence du composant ChildComponent

    console.log(this.childRef) // Référence de l'élément HTML correspondant au ChildComponent

    /* Les deux références pointent sur le service du componsat fils, même si le composant père à son provider
      car les view queries ne recherchent pas le provider du composant courrant */
    console.log(this.counterService)
    console.log(this.childServiceRef)

    // undefined car le template du composant fils n'est pas accesible
    console.log(this.childElementRef)
  }

}

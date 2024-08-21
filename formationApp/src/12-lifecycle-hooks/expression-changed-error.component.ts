import { Expression } from "@angular/compiler";
import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-child-error',
    standalone: true,
    template: `
        Error component
        <audio #audio src="../assets/sample.mp3" ></audio> 
    `,
    host: {
        'class': 'box',
    }
})
export class ChildErrorComponent implements AfterViewInit {

    @ViewChild('audio')
    audioRef!: ElementRef<HTMLAudioElement>

    ngAfterViewInit(): void {
        this.audioRef.nativeElement.play()
    }

}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChildErrorComponent],
    template: `
    <div class="content example">
        <h1>ExpressionChangedAfterItHasBeenCheckedError</h1>
        <button (click)="errorChild = !errorChild">Child Error</button>
        @if(errorChild) {
            <app-child-error />
        }
    </div>
    `
})
export class ExpressionChangedRootComponent {

    errorChild = false

}




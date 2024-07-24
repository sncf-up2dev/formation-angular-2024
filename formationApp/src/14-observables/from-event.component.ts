import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
        <h1>From Event</h1>
        <div class="box">
            <input #input/>
            <button #button>Click Me !</button>
        </div> 
        <video #video controls>
            <source src="assets/video.mp4"/>
        </video>
    `,
    host: {
        'class': 'content example'
    },
})
export class FromEventComponent implements AfterViewInit {


    @ViewChild('input')
    input!: ElementRef<HTMLInputElement>

    @ViewChild('button')
    button!: ElementRef<HTMLButtonElement>

    @ViewChild('video')
    video!: ElementRef<HTMLVideoElement>

    ngAfterViewInit() {
        fromEvent(this.input.nativeElement, 'input').subscribe(v => console.log(v))
        fromEvent(this.button.nativeElement, 'click').subscribe(v => console.log(v))
        fromEvent(this.video.nativeElement, 'play').subscribe(v => console.log(v))
    }

    onClick($event: MouseEvent) {
        console.log($event)
    }

}

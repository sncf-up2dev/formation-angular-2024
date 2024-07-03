import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, forwardRef(() => TableauComponent)],
    template: `
    <div class="content example">
        <h1>Hook Init</h1>
        <app-tableau [size]="5"/>
    </div>
    `
})
export class HooksInitComponent {


}

@Component({
    selector: 'app-tableau',
    standalone: true,
    imports: [CommonModule],
    template: `
        {{ numberArray }}
    `,
    host: {
        'class': 'box',
    }
})
export class TableauComponent implements OnInit, OnChanges {

    @Input({ required: true })
    size!: number

    numberArray: number[] = []

    ngOnInit() {
        console.log(this.size)
        this.numberArray = [...Array(this.size)].map(() => Math.round(Math.random() * 10))
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

}

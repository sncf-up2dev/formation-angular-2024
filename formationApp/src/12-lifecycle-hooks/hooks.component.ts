import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, forwardRef, inject } from "@angular/core";
import { Person, getRandomPerson } from "../utils/persons";
import { Logger } from "./logger.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [forwardRef(() => ClockComponent), forwardRef(() => HooksComponent)],
    template: `
    <div class="content example">
        <h1>Cycle de vie</h1>
        <div class="box">
            <div class="button-row">
                <button (click)="0">Detection Cycle</button>
                <button (click)="clock = !clock">Horloge</button>
            </div>
            <div class="box box-border">
                @if(clock) {
                    <app-clock />
                }
            </div>
        </div>
        <div class="box">
            Composants fils
            <button (click)="addChild()">Ajouter</button>
            <button (click)="removeChild()">Enlever</button>
            @for(child of childs; track i; let i = $index) {
                <div>
                    <button (click)="change(i)">Changer</button>
                    <app-hook [inputPerson]="child" /> 
                </div>
            }
        </div>
    </div>
    `
})
export class HooksRootComponent {

    clock = false

    childs: Person[] = []

    addChild(): void {
        this.childs.push(getRandomPerson())
    }

    removeChild(): void {
        this.childs.pop()
    }

    change(index: number): void {
        this.childs[index] = getRandomPerson()
    }

}

@Component({
    selector: 'app-clock',
    standalone: true,
    imports: [],
    template: `
        {{ value / 10 }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnDestroy {

    changeDetectorRef = inject(ChangeDetectorRef)

    value = 0

    interval = setInterval(() => {
        console.log(this.value)
        this.changeDetectorRef.markForCheck()
        this.value += 1
    }, 100)

    ngOnDestroy(): void {
        clearInterval(this.interval)
    }

}

@Component({
    selector: 'app-hook',
    standalone: true,
    imports: [],
    template: `
    <div class="border">
      {{ prefix }} {{ inputPerson?.name }} {{ inputPerson?.age }} <button (click)="add()">Age ++</button> {{ templateMethod() }}
    </div>
  `,
    styles: `
        :host{
            display: block;
        }
    `,
    providers: [
        Logger
    ],
    host: {
        "class": 'box box-border'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

    readonly logger = inject(Logger)

    readonly prefix = this.logger.prefix

    @Input()
    inputPerson?: Person

    add(): void {
        if (this.inputPerson) {
            this.inputPerson.age++
        }
    }

    templateMethod() {
        console.log("Template Metod")
    }

    constructor() {
        this.logger.log("constructor()")
    }

    ngOnInit(): void {
        this.logger.log("ngOnInit()")
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.logger.log("ngOnChanges()")
    }

    ngDoCheck(): void {
        this.logger.log("ngDoCheck()")
    }

    ngAfterViewInit(): void {
        this.logger.log("ngAfterViewInit()")
    }

    ngAfterViewChecked(): void {
        this.logger.log("afterViewChecked()")
    }

    ngOnDestroy(): void {
        this.logger.log("ngOnDestroy()")
    }

}
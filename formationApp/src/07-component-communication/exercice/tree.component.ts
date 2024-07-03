import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, booleanAttribute, inject } from "@angular/core";
import { Tree } from "./tree";
import { FolderComponent } from "./folder.component";
import { FormsModule } from "@angular/forms";

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule],

    selector: 'app-tree',
    template: `
    <input (click)="$event.stopPropagation()" [(ngModel)]="tree.value" />
    @if(expanded) {
        @for (child of tree.children; track $index) {
            <app-tree [tree]="child"/>
        }
    }
    `,
    styles: `
        :host {
            display: block;   
        }
    `,
    host: {
        'class': 'box box-border',
        '(click)': 'onClick($event)',
    }
})
export class TreeComponent {

    /* Ce fichier peut être librement modifié pour l'exercice (template et composant) */

    @Input({ required: true })
    tree!: Tree

    expanded = false

    onClick(event: Event) {
        event.stopPropagation()
        this.expanded = !this.expanded
    }

}
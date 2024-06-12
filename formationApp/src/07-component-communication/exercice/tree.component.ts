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
    <div (click)="onClick($event)" class="folder">
        <input [(ngModel)]="tree.value" />
        @if(expanded) {
            @for (child of tree.children; track $index) {
                <app-tree [tree]="child"/>
            }
        }
    </div>
    `,
    styles: `
        :host {
            width: 100%
        }    
        
        .folder {
            padding: 1rem;
            position: relative;
            background-color: var(--box);
            border: solid
        }
    `
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
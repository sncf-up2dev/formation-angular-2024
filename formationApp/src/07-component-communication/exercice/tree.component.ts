import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, booleanAttribute, inject } from "@angular/core";
import { Tree } from "./tree";
import { FolderComponent } from "./folder.component";

@Component({
    standalone: true,
    imports: [CommonModule],

    selector: 'app-tree',
    template: `
    <div class="folder">

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

}
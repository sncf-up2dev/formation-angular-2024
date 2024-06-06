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
        <div (click)="toggle()">
          {{ tree.value }}
        </div>
        @if (isExpended) {
          @for (child of tree.children; track child) {
            <app-tree [tree]="child"></app-tree>
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
            border: solid;

          &:hover {
            cursor: pointer;
        }
        }
    `
})
export class TreeComponent {

    /* Ce fichier peut être librement modifié pour l'exercice (template et composant) */

  @Input({ required: true }) tree!: Tree
  isExpended = false

  toggle() {
    this.isExpended = !this.isExpended
  }

}

import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Host, Input, Output } from "@angular/core";

@Component({
  selector: 'app-leaf-a',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box box-border">
        <div>Leaf A</div>
        <div>
          Compteur : {{ cpt }} <button (click)="cpt = cpt + 1; onClick.emit(cpt)" >++</button>
        </div> 
    </div>
  `,
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class LeafAComponent {
  @Output()
  onClick = new EventEmitter<number>()

  cpt = 0
}

@Component({
  selector: 'app-branch-a',
  standalone: true,
  imports: [CommonModule, LeafAComponent],
  template: `
    <div class="box box-border">
        Branche A
        <app-leaf-a (onClick)="onClick.emit($event)" />
    </div>
  `,
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class BranchAComponent {
  @Output()
  onClick = new EventEmitter<number>()
}

@Component({
  selector: 'app-root-a',
  standalone: true,
  imports: [CommonModule, BranchAComponent],
  template: `
    <div class="box ">
        Root A
        <app-branch-a (onClick)="onClick.emit($event)"  />
    </div>
  `,
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class RootAComponent {
  @Output()
  onClick = new EventEmitter<number>()
}

@Component({
  selector: 'app-leaf-b',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="box box-border">
        Root B - Valeur du compteur : {{ cpt }}
    </div>
  `,
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class LeafBComponent {
  @Input()
  cpt = 0
}


@Component({
  selector: 'app-root-b',
  standalone: true,
  imports: [CommonModule, LeafBComponent],
  template: `
    <div class="box">
        Root B
        <app-leaf-b [cpt]="cpt" />
    </div>
  `,
  styles: `
    :host {
      width: 100%;
    }
  `
})
export class RootBComponent {
  @Input()
  cpt = 0
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RootAComponent, RootBComponent],
  template: `
    <div class="content example">
      <h1>Multiple Input/Output</h1>
      <app-root-a (onClick)="cpt = $event" />
      <app-root-b [cpt]="cpt" />
    </div>
  `
})
export class BubblingComponent {
  cpt = 0
}


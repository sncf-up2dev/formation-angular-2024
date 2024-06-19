import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [],

    selector: 'app-host-context',
    template: `
        <div class="color-theme">
            HostContext : Couleur à définir dans le parent
        </div>
    `,
    styles: [`
      :host-context(.red-theme) .color-theme {
        color: red;
      }
      
      :host-context(.blue-theme) .color-theme {
        color: blue;
      }
  `],
})
export class HostContextComponent {

}
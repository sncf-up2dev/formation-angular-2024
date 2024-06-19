import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [],

    selector: 'app-host',
    template: `
        Click-me
    `,
    styles: [`
      :host {
        color: red;
      }
    `],
    host: {
        'class': 'box',
        '(click)': 'fontSize = fontSize + 1',
        '[style.font-size.px]': 'fontSize',
    }
})
export class HostBindingComponent {
    fontSize = 20
}

@Component({
    standalone: true,
    imports: [HostBindingComponent],

    selector: 'app-root',
    template: `
        <div class="content example">
            <h1>Host binding</h1>

            <app-host />
        </div>
    `,
})
export class HostBindingRootComponent {

}
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content example">
      <h1>Styles</h1>

      <p class="shared box">
        Global : Blanc
      </p>

      <app-shadow />
      <app-emulated />
      <app-none />

    </div>
  `
})
export class StyleRootComponent {

  clicked = false

}

@Component({
  selector: 'app-emulated',
  template: `
    <div class="shared box">
      Emulated : Rose
    </div>
  `,
  styles: [`
    .shared {
      color: pink;
    }

    :host {
      width: 100%;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent {

}

@Component({
  selector: 'app-none',
  template: `
    <div class="shared box">
      None : Rouge
    </div>
  `,
  styles: [`
    .shared {
      color: red;
    }

    :host {
      width: 100%;
    }
  `],

  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {

}

@Component({
  selector: 'app-shadow',
  template: `
    <div class="shared box">
      Shadow : Vert
    </div>
  `,
  styles: [`
    .shared {
      color: green;
    }

    :host {
      width: 100%;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent {

}
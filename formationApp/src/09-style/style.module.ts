import { NgModule } from '@angular/core';
import { EmulatedComponent, NoneComponent, ShadowComponent, StyleRootComponent } from './style.component';
import { BrowserModule } from '@angular/platform-browser';
import { HostContextComponent } from './host-context.component';


@NgModule({
  declarations: [
    EmulatedComponent,
    NoneComponent,
    ShadowComponent,
    StyleRootComponent,
  ],
  imports: [
    BrowserModule,
    HostContextComponent
  ],
  bootstrap: [
    StyleRootComponent
  ]
})
export class StyleEncapsulationModule { }
